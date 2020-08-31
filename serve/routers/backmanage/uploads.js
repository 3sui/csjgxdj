const express = require('express');
let router = express.Router();
var formidable = require('formidable');


const captcha = require('../../plugins/captcha')
const connection = require('../../mysql/mysql')()
const assert = require('http-assert')
const Core = require('@alicloud/pop-core');
const validator = require('validator');
const md5 = require('md5')
const jwt = require('jsonwebtoken')

var path = require("path");
var fs = require("fs");

router.post("/addProductImage",  (req,res)=> {
 
    let datas = {};
    datas.code = '0';
    datas.message = '上传图片成功';

    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    // console.log(__dirname);
    let filedr = "../../resource/ProductImage";
    form.uploadDir = path.resolve(__dirname , filedr);
    // console.log(form.uploadDir);
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    //处理图片
    form.parse(req, async function (err, fields, files) {
        console.log(files.file);
        var filename = files.file.name
        var nameArray = filename.split('.');
        var type = nameArray[nameArray.length - 1];
        var name = '';
        for (var i = 0; i < nameArray.length - 1; i++) {
            name = name + nameArray[i];
        }
        var date = new Date();
       
        var avatarName = '/' + date.getTime() + '.' + type;
        var newPath = form.uploadDir + avatarName;
        fs.renameSync(files.file.path, newPath); //重命名
       
        let data = {};
        data.name = avatarName;
        data.url = filedr + avatarName;
      

        let sql =`insert into ProductImage set ?`
        let temp={
            path: data.url,
            name: data.name,
        }
        let result =await connection(sql,temp)
        console.log(result);
        data.insertid=result.insertId
        datas.data=data
        res.send(datas);
        return;
    })
});


//图片加载,
router.get('/getProductImage/*', function (req, res) {
    console.log(req.url);
    let arry = req.url.split('/')
    let filename=arry[arry.length-1]
    let file_path = path.resolve(__dirname, "../../resource/ProductImage/", filename);

    fs.readFile(file_path, 'binary', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            //console.log(data);
            console.log("输出文件");
            //不加这句，页面可能会乱码，图片包含中文也会乱码
            res.writeHead(200, {
                'Content-Type': 'image/jpeg'
            });
            res.write(data, 'binary');
            res.end();
        }
    })
})


//上传需求文件
router.post("/addneedenclosure", (req, res) => {

    let datas = {};
    datas.code = '0';
    datas.message = '附件上传成功';

    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    // console.log(__dirname);
    let filedr = "../../resource/Enclosure";
    form.uploadDir = path.resolve(__dirname, filedr);
    // console.log(form.uploadDir);
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 100* 1024 * 1024;
    //处理图片
    form.parse(req, async function (err, fields, files) {
        console.log(files.file);
        var filename = files.file.name
        var nameArray = filename.split('.');
        var type = nameArray[nameArray.length - 1];
        var name = '';
        for (var i = 0; i < nameArray.length - 1; i++) {
            name = name + nameArray[i];
        }
        var date = new Date();

        var avatarName = '/' + date.getTime() + '.' + type;
        var newPath = form.uploadDir + avatarName;
        fs.renameSync(files.file.path, newPath); //重命名

        let data = {};
        data.name = avatarName;
        data.url = filedr + avatarName;


        let sql = `insert into profile set ?`
        let temp = {
            path: data.url,
            name: data.name,
        }
        let result = await connection(sql, temp)
        console.log(result);
        data.insertId = result.insertId
        datas.data = data
        res.send(datas);
        return;
    })
});
//文件加载
router.get('/getneedenclosure/*', function (req, res) {
    console.log(req.url);
    let arry = req.url.split('/')
    let filename = arry[arry.length - 1]
    let file_path = path.resolve(__dirname, "../../resource/Enclosure/", filename);

    fs.readFile(file_path, 'binary', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            //console.log(data);
            console.log("输出文件");
            //不加这句，页面可能会乱码，图片包含中文也会乱码
            res.writeHead(200, {
                'Content-Type': ' application/pdf '
            });
            res.write(data, 'binary');
            res.end();
        }
    })
})

module.exports = router;
