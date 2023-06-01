class NewsController{
 index(req,res){
    res.render('news');
 }
 //[GET] new 
 show( req,res){
    res.send('New detail ???')
 }

}
module.exports = new NewsController;