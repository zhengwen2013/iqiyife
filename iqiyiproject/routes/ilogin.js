var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var uName = 'zhengwen';
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.send('<div id="userHead" style="margin: 20px"><span>' + uName +'</span>   欢迎你~~</div>');

    //TODO: 访问ldap server去验证用户信息
});

module.exports = router;
