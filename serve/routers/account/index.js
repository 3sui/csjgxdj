/*
 * @Author: your name
 * @Date: 2020-07-13 16:13:40
 * @LastEditTime: 2020-08-06 14:44:10
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
        sql = `select * from user_info where user_name = '${account}' and is_deleted = 0`
        let a = await connection(sql)
        // console.log(a[0].info);


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
                    accessKeyId: 'wLTAI4FySWyDgcaSZbJXDLQ6mQ',
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
            results.success = true
            results.message = '注册成功'
            results.token = jwt.sign(a.insertId, app.get('secret'))
            results.user = query
        } else {
            results.success = false
            results.message = '验证码错误请重新输入'
        }
        res.send(results)
    })


    router.get('/123', (req, res) => {


        let text = md5(md5(md5(2)))
        let text2 = md5(md5(md5('2')))
        
        console.log(text);
        console.log(text2);
        res.send(text)
    })

    app.use('/api/account', router)
}