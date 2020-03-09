let User = require('../../models/user')
var md5 = require('blueimp-md5')
exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, (err, data) => {
        if (data) {
            if (data.password == req.body.password) {
                req.session.user = data // session 记录
                return res.status(200).json({ code: 0, msg: "登录成功" })
            }
        }
        return res.status(500).json({ code: 1, msg: '账号或者密码失败' })
    })
}

exports.logout = (req, res) => {
    req.session.user = null;
    res.redirect('/sign/login')
    res.end()
};
exports.register = (req, res) => {
    console.log(req.body.email)
    User.findOne({
        email: req.body.email
    }, (err, data) => {
        if (data) {
            console.log(111)
            return res.status(500).json({
                code: 1,
                msg: '已经被注册'
            })
        } else {
            new User(req.body).save()
                .then(data => {
                    res.status(200).json({ code: 0, data: data, msg: '注册成功' })
                })
                .catch(err => {
                    res.status(500).json({ code: 2, msg: '格式错误' });
                })
        }
    })
}