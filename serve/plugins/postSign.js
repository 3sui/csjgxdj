/*
 * @Author: your name
 * @Date: 2020-08-27 16:44:52
 * @LastEditTime: 2020-08-27 16:56:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\serve\plugins\postSign.js
 */
module.exports = (app, argus) => {
    const md5 = require('md5')
    let ts = Date.now();
    let md5Sign = `client_id=${app.get('client_id')}ts=${ts}${app.get('clientSecret')}`
    let sign = md5(md5Sign)
    // console.log(md5Sign);
    let url = `client_id=${app.get('client_id')}&ts=${ts}&sign=${sign}`
    // console.log(url);
    return url
}