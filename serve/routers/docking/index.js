/*
 * @Author: your name
 * @Date: 2020-08-21 15:13:35
 * @LastEditTime: 2020-08-21 15:34:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\serve\routers\supply&demand\index.js
 */
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const auth = require('../../middleware/auth')
    const connection = require('../../mysql/mysql')()

    router.get('/fetchSupply', auth(), (req, res) => {
        res.send(true)
    })

    app.use('/api/docking', router)
}