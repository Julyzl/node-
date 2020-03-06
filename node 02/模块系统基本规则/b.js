 const add = (x, y) => {
     return x + y
 }

 const reduce = (x, y) => {
     return x - y
 }

 exports.foo = 'this is b'

 module.exports = { add, reduce }

 // 原理
 //  let module ={
 //      exports :{
 //   add,
 //   reduce
 //      }
 //  }

 //  console.log(exports===module.exports);
 // true