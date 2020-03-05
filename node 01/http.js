// 使用node 构建web服务器
// 核心模块： http   模块职责就是帮你创建边写服务器

let http = require('http')


// http.createServer() 方法 创建一个web服务器
// 返回的是一个server实例
let server = http.createServer()

//  服务器要干嘛 ？ 发请求 ，接收请求，处理请求，给个反馈。

// 注册request请求事件，
// 当客户端请求过来，就会自动触发request请求，然后执行第二个参数：回调处理
// 回调函数2个参数，requset,response
// request获取客户端的请求信息
// response 发送响应消息,用write() 可以多次发送，但是最后要用end结束响应，否则客户端一直等待
// 响应内容只能是二进制数据或者字符串
server.on('request', (req, res) => {
    console.log(`路劲是${req.url}`);
    console.log("收到客户端的请求");
    if (req.url == '/') {
        let arr = [{
                name: 'AAA',
                price: 6548
            },
            {
                name: 'AAA',
                price: 6548
            },
            {
                name: 'AAA',
                price: 6548
            }
        ]
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end(JSON.stringify(arr))
    }
    if (req.url == '/login') {
        res.end('login.page')

    }
    if (req.url == '/html') {
        // text/plain是普通文本 ，浏览器不解析标签
        // text/html 可以解析
        // res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('<a href="#">ssdaf</a>')
    }
    // res.write('发给你了')
    // res.end()
})

// 绑定端口号
server.listen(5000, () => {
    console.log('服务器启动成功，访问localhost:5000');
})