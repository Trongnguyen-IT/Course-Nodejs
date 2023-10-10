const siteRouter = require('./site')
const newsRouter = require('./news')
const courseRouter = require('./course')
const meRouter = require('./me')

function route(app) {
    app.use('/news', newsRouter)
    app.use('/course', courseRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)

    // app.post('/home', (req, res) => {
    //     console.log('req.query', req.query);
    //     console.log('req.body', req.body);
    //     res.render('home')
    // })
}

module.exports = route