const Coures = require('../models/Course')
const { mongooseToObject } = require('../utill/mongo');
class CouresController {
    show(req, res,next) {
            Coures.findOne({slug: req.params.slug})
            .then(courses =>{
                res.render('coures/show', {courses : mongooseToObject(courses)})
            })
            .catch(next)
    }
}
module.exports = new CouresController;