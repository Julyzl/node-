let fs = require("fs")
    // 原生方法导出 module.exports = (app) => {}
    // 还有一种就是路由导出

// 路由 1，引入express router 2 router.get 3.导出router
let express = require('express')
let router = express.Router()

let Student = require('./student.js')

// 渲染主页数据
router.get('/', (req, res) => {
    // readFile第二个参数就是编码选项
    // fs.readFile('./db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         return res.status(500).end("server error")
    //     } else {
    //         res.render('index.html', {
    //             fruits: [
    //                 '苹果干',
    //                 '香蕉干',
    //                 '西瓜',
    //                 '土豆干'
    //             ],
    //             students: JSON.parse(data).students
    //         })
    //     }
    // })
    // console.log(Student.all());
    Student.all().then(data => {
        res.render('index.html', {
            fruits: [
                '苹果干',
                '香蕉干',
                '西瓜',
                '土豆干'
            ],
            students: data
        })
    }).catch(err => res.status(500).end("server error"))
})

// 添加数据
router.get('/add', (req, res) => {
        res.render('new.html', {})
    })
    // 添加数据接口
router.post('/add', (req, res) => {
        // 将post 过来的数据存储起来 db.json
        console.log(req.body)
        Student.save(req.body).then(resd => {

            res.send(resd)
        }).catch(err => {
            res.send("error")
        })
    })
    // 获取编辑页面
router.get("/edit", (req, res) => {
    Student.edit(req.query.id).then(data => {
        // console.log(req.query.id)
        res.render("edit.html", {
            students: data
        })
    })

})

// 编辑页面接口
router.post("/edit", (req, res) => {
    console.log(req.body.id)
    Student.update(req.body).then(data => {
        res.end(data)
    })
})

router.get("/del", (req, res) => {
    Student.del(req.query.id).then(data => {
        res.end(data)
    })
})
module.exports = router


// 原生写法
// module.exports = (app) => {
//     app.get('/', (req, res) => {
//         // readFile第二个参数就是编码选项
//         fs.readFile('./db.json', 'utf8', (err, data) => {
//             if (err) {
//                 return res.status(500).end("server error")
//             } else {
//                 res.render('index.html', {
//                     fruits: [
//                         '苹果干',
//                         '香蕉干',
//                         '西瓜',
//                         '土豆干'
//                     ],
//                     students: JSON.parse(data).students
//                 })
//             }
//         })

//     })
// }