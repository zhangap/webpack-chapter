const url = require('url');

const urlResult = url.parse('http://webpack.toobug.net/zh-cn/index.html');
console.log(urlResult)

var cookie = require('cookie');
var cookieResult = cookie.parse('name=zap;subject=webpack;')
console.log(cookieResult)
