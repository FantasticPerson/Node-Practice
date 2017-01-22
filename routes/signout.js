/**
 * Created by wdd on 2017/1/3.
 */
var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
    // console.log('signout');
    req.session.user = null;
    req.flash('success','登出成功');
    res.redirect('/posts');
    // res.send('signout');
});

module.exports = router;