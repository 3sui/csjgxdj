/*
 * @Author: your name
 * @Date: 2020-08-21 11:11:38
 * @LastEditTime: 2020-08-21 13:51:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\serve\routers\Interconnection\index.js
 */
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const auth = require('../../middleware/auth')
    const connection = require('../../mysql/mysql')()
    
    router.get('/fetch', auth(), (req, res) => {
        res.send(true)
    })

    app.use('/api/Interconnection', router)
}