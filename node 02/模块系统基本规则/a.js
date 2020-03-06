let { add, reduce } = require('./b.js')

let c = add(1, 2)
let d = reduce(10, 4)
console.log(d);
console.log(c);

let B = require('./b.js')
console.log(B);
// 优先从缓存加载，，避免重复加载。