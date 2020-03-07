let express = require('express')
let fs = require("fs")
let app = express()

// app.get('/', (req, res) => {
//     res.end("send")
// })

// 配置模板引擎
app.engine("html", require("express-art-template"))
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// 挂载到 app服务上
app.use(require('./router.js'))
app.listen(5000, () => {
    console.log("服务器启动");
})