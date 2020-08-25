/*
 * @Author: your name
 * @Date: 2020-07-15 17:19:54
 * @LastEditTime: 2020-08-21 14:12:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \serve\middleware\auth.js
 */
module.exports = option => {
    const connection = require('../mysql/mysql')()
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')

    return async (req, res, next) => {
        console.log(1);
        assert(req.headers.authorization, 401, '请登录')

        let token = req.headers.authorization.split(' ').pop()
        //token不存在
        console.log(token);

        assert(token, 401, '请登录')
        const {
            id
        } = jwt.verify(token, req.app.get('secret'))
        //id不存在
        console.log(jwt.verify(token, req.app.get('secret')));

        assert(id, 401, '请登录')
        let sql = "select * from user_info where id = ?"
        let result = await connection(sql, id)
        req.user = result[0]
        // req.user.abc = 123
        // console.log(req.user);

        //用户不存在
        console.log(4);

        assert(req.user, 401, '请登录')
        console.log(5);

        // let result2 = await connection(`select * from user_role where user_id = ${req.user.id}`)
        // req.user.role = result2[0].role_id
        // console.log(result2);

        next()
    }
}