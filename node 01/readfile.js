// fs 是核心模块，提供所有的文件操作相关的api
// 使用 require 方法加载fs 核心模块
var fs = require('fs')

// readFile('url',回调函数 )  默认存储二进制数据 转为16进制
// 通过toSring 方法转化
// fs.readFile('./hello.txt', (err, data) => {
//     console.log(err);
//     console.log(data.toString());
// })

// 写文件  第一个参数路径 第二个内容  第三个回调  成功err 就是 null
fs.writeFile('./hello.txt', '写文件11111111', (err, data) => {
    if (err) {
        console.log('读取文件失败');
    } else {
        // console.log(data.toString());
        console.log('文件写入成功');

    }
})