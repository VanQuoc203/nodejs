const newsRouter = require('./news');
const siteRouter = require('./site');
const rourseRouter =require('./courses')
function route(app) {
    app.use('/news', newsRouter)
     app.use('/courses',rourseRouter)
    app.use('/', siteRouter)
}
module.exports = route;