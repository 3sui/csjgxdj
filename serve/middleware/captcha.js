/*
 * @Author: your name
 * @Date: 2020-07-13 15:40:07
 * @LastEditTime: 2020-07-17 11:29:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \serve\middleware\captcha.js
 */
module.exports = option => {
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')

    return async (req, res, next) => {
        let token = req.headers.authorization.split(' ').pop()
        const {
            captchaText
        } = jwt.verify(token, req.app.get('secret'))
        console.log(captchaText);
    }
}