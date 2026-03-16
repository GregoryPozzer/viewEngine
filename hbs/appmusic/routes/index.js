var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/igreja', function(req, res, next) {
  res.render('igreja', { title: 'Express' });
});
module.exports = router;
