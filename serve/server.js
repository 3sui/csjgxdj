/*
 * @Author: your name
 * @Date: 2020-07-08 17:13:20
 * @LastEditTime: 2020-08-21 15:36:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \serve\server.js
 */
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParse = require('body-parser')

const fs = require('fs')


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: {
    //     sameSite: "lax",
    //     secure : true
    // }
}))
//开放uploads文件夹
// app.use('/uploads', express.static(__dirname + '/uploads'))
//开放nodeserver文件夹
// app.use('/nodeserver', express.static(__dirname + '/nodeserver'))
// app.use('/nodeServer', express.static(__dirname + '/nodeServer/uploads'))

//连接服务器
require('./mysql/mysql.js')(app)
// require('./route/admin/productProfile/index')(app)
// require('./route/map/index.js')(app)
// require('./route/deviceRecord/index.js')(app)
// require('./route/login/index.js')(app)
// require('./route/admin/productProfile/index')(app)
// require('./route/dataSettings/index')(app)
// require('./route/analysis/index')(app)
// require('./route/product/repair')(app)
// require('./route/maintain/index')(app)
// require('./route/monitor/index')(app)
// require('./route/home/index')(app)

// require('./route/upload/index')(app)


// require('./route/mobile/index')(app)

require('./routers/account/index')(app)
require('./routers/Interconnection/index')(app)
require('./routers/docking/index')(app)
require('./routers/needs/index')(app)
require('./routers/backmanage/index')(app)

const uploads= require('./routers/backmanage/uploads')




app.use('/api/backmanage', uploads);




app.set('secret', 'password')


app.get('/abc', (res, req) => {
    captcha(app)
    console.log(123);

    req.send(captcha(app))
})

app.use(function (req, res, next) {
    // if (!req.session.views) {
    //     req.session.views = {}
    // }

    // // get the url pathname
    // var pathname = parseurl(req).pathname

    // // count the views
    // req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

    next()
})

app.get('/foo', function (req, res, next) {
    req.session.text = 'sadfasdf'
    console.log(req.session);
    // res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

app.get('/bar', function (req, res, next) {
    console.log(req.session);

    // res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})
app.use((err, req, res, next) => {
    // console.log(123)
    res.status(err.statusCode || 500).send({
        message: err.message
    })
})



app.listen(8892, (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log('服务器已连接,端口号8892');
    }
})