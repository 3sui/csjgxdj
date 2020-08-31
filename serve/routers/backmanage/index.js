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

    //添加商品
    router.post('/addProduct', async (req, res) => {
        console.log(req.body);
        let data = req.body;
        let sql=`insert into Product set ?`;
        let result =await connection(sql,data)
        console.log(result);
        res.send(result)
    })

    //获取商品列表
    router.get('/getProduct', async (req, res) => {
    
        let sql = `select * from Product`;
        let result = await connection(sql)
        // console.log(result);
        res.send(result)
    })
   

    //上架
    router.post('/ProductShelfUp', async (req, res) => {
        let id=req.body.id;
        let sql = `update  Product set state='待审核' where id =${id}`;
        let result = await connection(sql)
        console.log(result);
        res.send(result)
    })

    //下架
    router.post('/ProductShelfDown', async (req, res) => {
        let id = req.body.id;
        let sql = `update  Product set state='待发布' where id =${id}`;
        let result = await connection(sql)
        console.log(result);
        res.send(result)
    })



















    app.use('/api/backmanage', router)
}