/*
 * @Author: your name
 * @Date: 2020-07-13 16:13:40
 * @LastEditTime: 2020-08-18 17:22:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \serve\routers\account\index.js
 */
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const captcha = require('../../plugins/captcha')
    const connection = require('../../mysql/mysql')()
    const assert = require('http-assert')
    const Core = require('@alicloud/pop-core');
    const validator = require('validator');
    const md5 = require('md5')
    const jwt = require('jsonwebtoken')
    const auth = require('../../middleware/auth')
    //登录获取图形验证
    router.get('/fetchCaptcha', (req, res) => {
        let data = captcha()
        let results = {
            success: true,
            data: data.data
        }
        // console.log(data);
        // results.captchaText = jwt.sign(data.text, app.get('secret'))
        req.session.cap = data.text
        res.send(results)
    })


    //验证验证码
    router.post('/varCode', (req, res) => {
        console.log(req.session);
        let results = {}
        let query = req.body
        let text = req.session.cap
        if (query.code.toLowerCase() === text.toLowerCase()) {
            results.success = true
            results.message = '验证通过'
            res.send(results)
        } else {
            results.success = false
            results.message = '验证失败,请重新验证'
            res.send(results)
        }

    })

    //登录
    router.post('/login', async (req, res) => {
        console.log(req.body);
        let {
            account,
            password
        } = req.body
        let results = {}
        let sql
        sql = `select * from user_info where phone = '${account}' and is_deleted = 0`
        let a = await connection(sql)
        console.log(a);

        console.log(a[0].user_name);


        assert(a.length, 422, '用户不存在')
        password = md5(md5(md5(password)))
        console.log(password);
        assert(a[0].password === password, 422, '密码不正确')
        results.success = true
        results.message = '登录成功'
        results.userInfo = a[0]
        results.token = jwt.sign(a[0].id, app.get('secret'))

        res.send(results)

    })


    //获取手机验证码
    router.post('/fetchVer', async (req, res) => {
        let results = {}
        let query = req.body
        let phone = query.phone + ''
        if (validator.isMobilePhone(phone, ["zh-CN"])) {
            let sql = `select * from user_info where phone = ${phone} and is_deleted = 0`
            let a = await connection(sql)
            console.log(a);
            if (a.length == 0) {
                let client = new Core({
                    accessKeyId: 'LTAI4FySWyDgcaSZbJXDLQ6m',
                    accessKeySecret: 'dUfH5jsmw0BMl0mkIyjeJ5NHc2Xrms',
                    endpoint: 'https://dysmsapi.aliyuncs.com',
                    apiVersion: '2017-05-25'
                });
                let code = ('000000' + Math.floor(Math.random() * 999999)).slice(-6)
                console.log(code);
                let params = {
                    "RegionId": "cn-hangzhou",
                    "PhoneNumbers": `${phone}`,
                    "SignName": "航天云网",
                    "TemplateCode": "SMS_197595291",
                    "TemplateParam": `{\"code\": ${code}}`
                }

                let requestOption = {
                    method: 'POST'
                };

                client.request('SendSms', params, requestOption).then((result) => {
                    console.log(JSON.stringify(result));


                }, (ex) => {
                    console.log(ex);
                })
                req.session.sms = code
                console.log(req.session, '--------------------');
                results.success = true
                results.message = '验证码已发送请注意查收'
                res.send(results)

            } else {
                results.success = false
                results.message = '此号码已注册过,请更换其他号码'
                res.send(results)
            }

        } else {
            results.success = false
            results.message = '号码格式不正确,请输入正确的号码'
            res.send(results)
        }


    })

    //用户注册
    router.post('/register', async (req, res) => {
        let results = {}
        let query = req.body
        let sms = req.session.sms || ''
        let password = md5(md5(md5(query.password)))
        console.log(password);

        console.log(query);
        console.log(req.session);
        if (sms == query.verCode) {
            let sql = `insert into user_info (phone, password, user_name) values ('${query.phone}','${password}','${query.userName}')`
            let a = await connection(sql)
            console.log(a);
            let userInfo = {
                id: a.insertId
            }
            results.success = true
            results.message = '注册成功'
            results.token = jwt.sign(userInfo, app.get('secret'))
            results.user = query
        } else {
            results.success = false
            results.message = '验证码错误请重新输入'
        }
        res.send(results)
    })

    //注册企业
    router.post('/registerBusiness', auth(), async (req, res) => {
        let query = req.body
        let userId = req.user.id
        let results = {}
        let sql = `insert into business_info set business_name = '${query.businessName}', business_address = '${query.businessAddress}', business_type = '${query.businessType}'`
        console.log(sql);
        let a = await connection(sql)
        let businessId = a.insertId
        console.log(a);
        sql = `update user_info set business = ${businessId}, business_role = 2 where id = ${userId}`
        console.log(sql);
        a = await connection(sql)
        results.success = true
        results.message = '企业注册成功'
        res.send(results)
    })


    //加入企业
    router.post('/applyBusiness', auth(), async (req, res) => {
        console.log(req.user);
        let query = req.body
        console.log(query);
        let sql = `select id from business_info where is_deleted = 0 and business_name = '${query.business}'`
        let a = await connection(sql)
        let businessId = a[0].id
        let userId = req.user.id
        sql = `update user_info set business = ${businessId}, business_role = 1 where id = ${userId}`
        a = await connection(sql)
        console.log(a);
        let results = {
            success: true,
            message: '加入企业成功'
        }
        res.send(results)
    })

    //获取所有企业
    router.get('/fetchBusiness', async (req, res) => {
        let sql = `select * from business_info where is_deleted = 0`
        let a = await connection(sql)
        console.log(a);
        let results = {}
        results.success = true
        let arr = []
        a.forEach((item, index) => {
            arr[index] = {
                value: item.business_name,
                address: item.business_address,
                id: item.id
            }
        })
        console.log(arr);
        results.business = arr
        res.send(results)
    })




    app.use('/api/account', router)
}