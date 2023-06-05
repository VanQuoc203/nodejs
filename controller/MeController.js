const Coures = require('../models/Course')
const { mutipleMongooseToObject } = require('../utill/mongo');
class MeController {
   storedCourse(req,res,next){
    Coures.find({})
    .then(courses =>  {          
        res.render('me/store-courses',
        {courses : mutipleMongooseToObject(courses)})
    })
    .catch(next)
   }
}
//GET,POST,PUT,PATH(chinh sua du lieu)
module.exports = new MeController();