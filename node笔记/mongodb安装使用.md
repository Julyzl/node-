安装配置



启动服务

mongod

在启动盘的根目录下需要有一个data文件夹和db文件夹



连接本地数据库

mongo

退出exit



基本命令

- show dbs 查看显示所有数据库
- use 数据库名称 切换到数据库，没有回自动建立
- show collections 查看表
- db.表名.find()  查看表数据



基本语句

```shell
// 引入mongoose
const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/test');

// 设计表的结构
let Schema = mongoose.Schema

let students = new Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        required: true
    },
    bob: {
        type: String,
        required: true
    }
})

// 将文档结构发布为模型  mongoose.model('大写名词来表示数据库名称'，'架构')
let User = mongoose.model("User", students)

// 有了模型构造函数之后，对这个构造函数进行增删改查
// 实例化一个User

// 增加数据
let adduser = new User({
    name: "hzl",
    age: 20,
    bob: '爱嘉嘉'
})
adduser.save().then(res => console.log('suceess'))

// 查询数据 find({查询对象}，回调函数) 查询的是所有符合查询条件的资源，变成一个数组
// findOne 是查询一个，查询结果是个对象，查不到就是null
User.find({ name: 'hzl' }, (err, res) => {
    console.log(res);
})
User.findOne({ name: 'hzl' }, (err, res) => {
    console.log(res);
})

// 删除数据
User.remove({ name: "hzl" }, (err, res) => {
    if (err) console.log('删除失败');
    console.log('成功')
})


// 更新数据 第一个参数是查找条件，第二个修改内容，第三个回调
// User.findByIdAndUpdate(id,修改内容，回调) 根据id修改 
//update()只更新找的第一个
// updateMany()更新多个
User.updateMany({ name: "hzl" }, {
    age: 22
}, (err, res) => {
    console.log('成功' + res)
})
```

