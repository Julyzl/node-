 var Arr = [
     { name: 'aaaaa', num: 5329239, id: 1 },
     { name: 'bbbbbb', num: 5329935, id: 3 },
     { name: 'vvvvv', num: 639539, id: 23 },

 ]

 let a = Arr.find(i => i.id == 1)
     //  console.log(a) //{ name: 'aaaaa', num: 5329239, id: 1 }
     //  a.id = 987987987 // 相同引用，也是会改变
     //  console.log(a, Arr)

 let obj = {
         name: "hzl",
         age: 18,
         bob: "study"
     }
     // 对于对象来说是深拷贝，对于数组还是会改变原来的值
 let c = Object.assign({}, obj)
 c.name = "ss"
 console.log(c)
 console.log(obj);