// require 方法有两个作用
// 1.加载文件模块并且执行里面的代码
//2.拿到被夹在文件模块导出的接口对象


let b = require('./b.js')
console.log(b.add(1, 2));
console.log(b);