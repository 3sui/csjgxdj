/*
 * @Author: your name
 * @Date: 2020-07-13 16:04:29
 * @LastEditTime: 2020-07-17 09:40:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \serve\plugins\captcha.js
 */
module.exports = app => {
    const svgCaptcha = require('svg-captcha');
    let option = {
        size: 4,
        ignoreChars: '0oli19q',
        noise: 1,
        color: true
    }
    let captcha = svgCaptcha.create(option);
    // console.log(captcha);
    return captcha
}