// student.js 只处理数据，不关心业务
let fs = require('fs')
let dbPath = './db.json'

const StuT = require('./model/student.js')
    // 获取所有学生列表
exports.all = () => {
        return new Promise((resolve, reject) => {
            StuT.find((err, data) => {
                resolve(data)
            })
        });

    }
    // 添加保存学生
exports.save = (post) => {
        return new Promise((resolve, reject) => {
            console.log(StuT);
            let newData = new StuT(post)
            newData.save().then(res => {
                console.log(res)
                resolve(res)
            }).catch(err => {
                console.log("失败")
            })
        });
    }
    // 更新学生
exports.update = (post) => {
        return new Promise((resolve, reject) => {
            console.log(post)
            StuT.findByIdAndUpdate(post.id, post, (err, res) => {
                resolve('success')
            })
        });
    }
    // 渲染编辑界面
exports.edit = (post) => {
        return new Promise((resolve, reject) => {
            console.log(post)
            StuT.findById(post, (err, res) => {
                console.log(res)
                resolve(res)
            })
        });
    }
    // 删除学生
exports.del = (post) => {
    return new Promise((resolve, reject) => {
        StuT.findByIdAndRemove(post, (err, res) => {
            resolve('success')
        })

    });
}