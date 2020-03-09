Node中是模块作用域

require

- 执行被加载模块的代码

- 得到被加载模块中的exports导出的接口对象

   

  

exports

- 对于希望其他模块可以被访问，把这些公开的成员挂载到exports接口对象中

导出单个成员

```javascript
add(x,y){
    return x+y
}
exports.xxx=add
```



导出多个成员

```java
 const add = (x, y) => {
     return x + y
 }

 const reduce = (x, y) => {
     return x - y
 }
 module.exports = { add, reduce }
```

exports 是module.exports的一个引用

不可同时存在，会覆盖上级



优先从缓存加载，，避免重复加载。

```JavaScript
第三方加载 原理
node_modules文件夹中
mkdir  text
package.json 文件
{“main”：“入口文件.js”}
// 默认index.js
入口文件.js
exports.foo="导出内容"
```



