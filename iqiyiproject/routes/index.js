var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./views/index.html', 'utf-8', function(err, data) {
    res.send(data);
  })

});

module.exports = router;
