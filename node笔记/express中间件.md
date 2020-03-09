```shell
// 引入express框架
const express = require('express')

// 创建网站服务器
const app = express()

// 处理路由请求
app.get('/request', (req, res, next) => {
    req.name = 'hzl'
    next()
})
app.get('/request', (req, res) => {
    res.send(req.name) // hzl
})

// 监听端口
app.listen(3000, () => console.log('服务器启动成功...'))
```

