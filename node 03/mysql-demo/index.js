// 引入第三方的包
let mysql = require('mysql')

// 1 .创建连接
let con = mysql.createConnection({
    host: 'localhost:3000',
    user: 'me',
    password: "123456",
    datebase: 'july'
})

// 2. 连接数据库
con.connect();

// 3. 执行数据操作
con.query('select *from students', (err, data, fields) => {
    if (err) throw err;
    console.log(data)
})