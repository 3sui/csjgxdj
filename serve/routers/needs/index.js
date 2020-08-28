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
    const toTree =require('../../plugins/Totree')

    router.get('/getneedsclass', async (req, res) => {
        let sql = `select * from AbilityClassification where modename = "发布需求" `
        let result = await connection(sql)
        // console.log(data);
        let data = toTree.Transformate(result)      
        res.send(data)
    })

    router.get('/getproductclass', async (req, res) => {
        let sql = `select * from AbilityClassification where modename = "发布商品" `
        let result = await connection(sql)
        // console.log(data);
        let data = toTree.Transformate(result)
        res.send(data)
    })
    router.get('/getproductclass', async (req, res) => {
        let sql = `select * from AbilityClassification where modename = "发布设备" `
        let result = await connection(sql)
        // console.log(data);
        let data = toTree.Transformate(result)
        res.send(data)
    })
    router.get('/getproductclass', async (req, res) => {
        let sql = `select * from AbilityClassification where modename = "发布工厂" `
        let result = await connection(sql)
        // console.log(data);
        let data = toTree.Transformate(result)
        res.send(data)
    })
    router.post('/addneedcontent', async (req, res) => {
        console.log(123);
        let data ={
            needname: req.body.needname,
            needcount: req.body.needcount,
            needunit: req.body.needunit,
            needtips: req.body.needtips,
            needexpectprice: req.body.needexpectprice, 
        }
        console.log(data);
        let sql = `insert into needcontent set ? `
        let result = await connection(sql,data)
        res.send(result)
    })
    router.post('/removeneedcontent', async (req, res) => {
        console.log(123);
        let  id= req.body.id
        let  is_deleted=1 
        let sql = `update  needcontent set is_deleted=${is_deleted} where id=${id}`
        let result = await connection(sql)
        res.send(result)
    })

    router.post('/addneed', async (req, res) => {
        console.log(123);
        let data = req.body
        console.log(data);
     
        let sql = `insert into   InquiryOrder set ?`
        let result = await connection(sql,data)
        res.send(result)
    })








    app.use('/api/needs', router)
}