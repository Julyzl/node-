let express = require('express')
let app = express();

// 公开指定目录
// 可以直接通过 / public/xx 访问目录中所有的资源
app.use('/public', express.static('./public/'))
    // 使用引擎模板art ,app.engine('文件后缀名'，函数)
app.engine('html', require('express-art-template'));
// 设置路径 
// 默认路径是views app.set("文件名","文件路径")
app.get('/', (req, res) => {
    // res.send("hello world")
    // 默认路径是views 直接写文件名即可
    res.render('404.html')
    res.send("hell是是是o world")

})
app.get('/about', (req, res) => {
    res.end("about")
})

app.listen(5000, () => {
    console.log("服务启动");
})