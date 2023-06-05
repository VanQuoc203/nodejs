const Coures = require('../models/Course')
const { mongooseToObject } = require('../utill/mongo');
class CouresController {
    show(req, res, next) {
        Coures.findOne({ slug: req.params.slug })
            .then(coures => {
                res.render('courses/show', { coures: mongooseToObject(coures) })
            })
            .catch(next)
    }
    create(req, res, next) {
       
        res.render('courses/create')

    }
    store(req, res, next) {
        const formdata = req.body;
        const courses = new Coures(formdata);
        courses.save()
            .then(() => res.redirect(('store'))).catch();      
    }
    edit(req, res, next) {
        Coures.findById(req.params.id)
            .then(coures => {
                res.render('courses/edit', { coures: mongooseToObject(coures) })
            })
            .catch(next)
    } 
    update(req, res, next) {
        Coures.updateOne({_id:req.params.id},req.body)
        .then(() => res.redirect('/me/stored/courses') )
        .catch(next);
    }

}
module.exports = new CouresController;