const http = require('http')
const url = require('url')
http.createServer((req, res) => {
    console.log(url.parse(req.url))

    res.setHeader('Access-Control-Allow-Origin', '*')
    let data = JSON.stringify({
        name: "黄金鑫",
        age: 21
    })
    res.write(data)
    res.end()
}).listen('3000')


