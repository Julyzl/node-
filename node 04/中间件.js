const express = require('express');

let app = express()

// app.use('请求对象', 响应对象, 下一个中间件)

app.use('/adlin', (req, res, next) => {

    next()
})

// 中间件的应用：检查用户是否登录
app.use('/admin', (req, res, next) => {
    let isLogin = false
    if (isLogin) {
        next()
    } else {
        res.send('您还没有登录，不能访问 /admin 这个页面')
    }
})
app.get('/admin', (req, res) => {
    res.send('您已经登录 可以访问当前页面')
})

// 中间件的应用：自定义404页面
app.use((req, res, next) => {
    res.status(404).send('当前访问的页面不存在...')
})