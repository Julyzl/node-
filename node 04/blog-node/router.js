module.exports = (app) => {
    app.use('/sign', require('./routes/sign'))
}