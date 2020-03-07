// const add = (x, y, callback) => {
//     setTimeout(() => {
//         let all = x + y
//         callback(all)
//     }, 1000);
// }

// function date(res) {
//     console.log(res + new Date());
// }
// add(1, 2, (data) => {
//     console.log(data);
// })



// await 只能 在async中使用
// let add = async(x, y) => {
//     const exp = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let all = x + y
//             resolve(all);
//         }, 2000)
//     });
//     console.log(11)
//     return exp

// }

// add(1, 2).then(res => {
//     console.log(res);
// })


let fn = (x, y, callback) => {
    let date = new Date();
    let all = x + y
    callback(date)
    return all
}

let a = fn(1, 2, (data) => {
    console.log(data);
})
console.log(a)