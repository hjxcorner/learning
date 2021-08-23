const http = require('http')
const url = require('url')
http.createServer((req, res) => {
    console.log(url.parse(req.url))
    let Url = url.parse(req.url, true) //获取到url对象
    var callbackFun = Url.query.callback //获取客户端传回的callback
    let data = JSON.stringify({
        name: "黄金鑫",
        age: 21
    }) 
    console.log(callbackFun)
    res.write(`${callbackFun}(${data})`)
    res.end()
}).listen('3000')