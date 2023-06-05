const newsRouter = require('./news');
const siteRouter = require('./site');
const couresRouter = require('./coures')
const meRouter = require('./me')
function route(app) {
    app.use('/news', newsRouter)
    app.use('/courses', couresRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
}
module.exports = route;