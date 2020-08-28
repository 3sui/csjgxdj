

//datetime类型的，转换成时间戳，返回Number类型
let Tostr = function (params) {

    var date = new Date(params);
    return date.getTime();
}
//Number类型，转换成时间，返回字符串类型
let Todate = function (params) {
    var date = new Date(params);
    var Y = date.getFullYear() ;
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) ;
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) ;
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) ;
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':'+ s;

}
//Number类型，转换成时间，返回字符串类型
let Today = function (params) {
    var date = new Date(params);
    var Y = date.getFullYear() ;
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) ;
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) ;
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) ;
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + '-' + M + '-' + D 

}
module.exports = {
     Tostr,Todate,Today
}
