const express = require('express')
const template = require('express-art-template')
const path = require('path')
const mongoose = require('mongoose');
const session = require('express-session');
//连接数据库
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, // 加载一次
    useUnifiedTopology: true
}, function(err, db) {
    if (err) {
        console.log(err)
    }
    console.log('mongodb is connected.')
})

let app = express()

// 配置引擎模板
app.engine('html', template)
    // post 请求体
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// 公开静态目录
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))



//express不支持Cookie和Session
//用express-session插件来解决
app.use(session({
    //配置加密字符串
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {

        res.render('index.html', {
            user: req.session.user
        })
    })
    // 路由配置
require('./router.js')(app)

app.listen(5000, () => {
    console.log('server running')
})