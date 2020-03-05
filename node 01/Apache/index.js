// fs
const fs = require('fs')
let http = require('http')
const dir = 'F:/360MoveData/Users/JULY/Desktop/node/node 01/Apache/hello.txt'
const host = 'F:/360MoveData/Users/JULY/Desktop/node/node 01/Apache'
let server = http.createServer();

server.on('request', (req, res) => {
    let url = host + req.url
    console.log(url);
    console.log(dir);
    fs.readFile(url, (err, data) => {
        if (err) {
            res.end("404");
        }
        res.end(data);
    })


})

server.listen(5000, () => {
    console.log('服务启动');
})