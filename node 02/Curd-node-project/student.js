// student.js 只处理数据，不关心业务
let fs = require('fs')
let dbPath = './db.json'

// 获取所有学生列表
exports.all = () => {
        return new Promise((resolve, reject) => {
            fs.readFile(dbPath, (err, data) => {
                if (err) {
                    reject("server error")
                } else {
                    resolve(JSON.parse(data).students)
                }
            })
        });

    }
    // 添加保存学生
exports.save = (post) => {
        return new Promise((resolve, reject) => {
            fs.readFile(dbPath, (err, data) => {
                if (err) {
                    reject("server error")
                } else {
                    let newdata = (JSON.parse(data).students)
                    post.id = newdata.length
                    console.log(newdata)
                    newdata.push(post)
                    let fileData = JSON.stringify({
                        students: newdata
                    })
                    fs.writeFile(dbPath, fileData, err => {

                    })
                    resolve('success')
                }
            })
        });
    }
    // 更新学生
exports.update = (post) => {
        return new Promise((resolve, reject) => {
            fs.readFile(dbPath, (err, data) => {
                if (err) {
                    reject("server error")
                } else {
                    let newdata = (JSON.parse(data).students)
                    let updata = newdata.find(item => item.id == post.id)
                    console.log(post);
                    // 赋值
                    for (var key in post) {
                        updata[key] = post[key]
                    }
                    let fileData = JSON.stringify({
                        students: newdata
                    })
                    fs.writeFile(dbPath, fileData, err => {

                    })
                    resolve('success')
                }
            })
        });
    }
    // 渲染编辑界面
exports.edit = (post) => {
        return new Promise((resolve, reject) => {
            fs.readFile(dbPath, (err, data) => {
                if (err) {
                    reject("server error")
                } else {
                    let newdata = (JSON.parse(data).students)
                    let updata = newdata.find(item => item.id == post)
                        // console.log(updata);
                    resolve(updata)
                }
            })
        });
    }
    // 删除学生
exports.del = (post) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, (err, data) => {
            if (err) {
                reject("server error")
            } else {
                let newdata = (JSON.parse(data).students)
                let delid = newdata.findIndex(item => item.id === post)
                    // 赋值
                newdata.splice(delid, 1)
                let fileData = JSON.stringify({
                    students: newdata
                })
                fs.writeFile(dbPath, fileData, err => {

                })
                resolve('success')
            }
        })
    });
}