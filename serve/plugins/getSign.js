/*
 * @Author: your name
 * @Date: 2020-08-27 16:46:10
 * @LastEditTime: 2020-08-27 18:22:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\serve\plugins\getSign.js
 */
module.exports = (app, argus = []) => {
    const md5 = require('md5')
    let url
    let ts = Date.now();
    let md5Sign = `client_id=${app.get('client_id')}${argus.join('')}ts=${ts}${app.get('clientSecret')}`
    let sign = md5(md5Sign)
    console.log(md5Sign);
    if (argus) {
        url = `${argus.join('&')}&client_id=${app.get('client_id')}&ts=${ts}&sign=${sign}`
    } else {
        url = `client_id=${app.get('client_id')}&ts=${ts}&sign=${sign}`
    }

    console.log(url);
    return url
}