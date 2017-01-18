/**
 * Created by wdd on 2017/1/3.
 */
module.exports = function(app){
    app.get('/',function(req,res){
        // res.send('signout');
        res.redirect('/posts');
    });
    app.use('/signup',require('./signup'));
    app.use('/signin',require('./signin'));
    app.use('/signout',require('./signout'));
    app.use('/posts',require('./posts'));
}