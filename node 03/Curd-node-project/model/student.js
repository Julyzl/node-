let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test').then(res => {
    console.log("cg")
}).catch(err => console.log("失败"))


let Schema = mongoose.Schema;

let StuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    bob: {
        type: String,
        required: true
    }
})

let Students = mongoose.model('Students', StuSchema)

module.exports = Students;