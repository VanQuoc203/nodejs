const Coures = require('../models/Course')
const { mutipleMongooseToObject } = require('../utill/mongo');
class SiteController {
    index(req, res,next) {
        Coures.find({})
        .then(courses =>  {          
            res.render('home',
            {courses : mutipleMongooseToObject(courses)})
        })
        .catch(next)
    }
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController;