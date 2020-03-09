const express = require('express')
const router = express.Router()
const controller = require('./controller')
router.get('/login', (req, res) => {
    res.render('sign.html')
})

router.get('/register', (req, res) => {
    res.render('register.html')
})
router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/logout', controller.logout)
module.exports = router