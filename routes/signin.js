/**
 * Created by wdd on 2017/1/3.
 */
var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.get('/', checkNotLogin, function(req, res, next) {
    res.send(req.flash());
});

router.post('/', checkNotLogin, function(req, res, next) {
    res.send(req.flash());
});

module.exports = router;