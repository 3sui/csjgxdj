/*
 * @Author: your name
 * @Date: 2020-08-27 16:32:33
 * @LastEditTime: 2020-08-27 16:41:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \常州平台\serve\plugins\fetchSign.js
 */
module.exports = app => {
    function postSign() {
        let ts = Date.now();
        let md5Sign = `client_id=${app.get('client_id')}ts=${ts}${app.get('clientSecret')}`
        let sign = md5(md5Sign)
        console.log(md5Sign);
        let url = `client_id=${app.get('client_id')}&ts=${ts}&sign=${sign}`
        console.log(url);
        return url
    };

    function gitSign(arg) {
        let ts = Date.now();
        let md5Sign = `client_id=${app.get('client_id')}${arg.join('')}ts=${ts}${app.get('clientSecret')}`
        let sign = md5(md5Sign)
        console.log(md5Sign);
        let url = `${arg.join('&')}&client_id=${app.get('client_id')}&ts=${ts}&sign=${sign}`
        console.log(url);
        return url
    }
}