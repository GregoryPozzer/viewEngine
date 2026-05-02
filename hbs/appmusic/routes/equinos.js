var express = require('express');
var router = express.Router();

/* GET equinos page. */
router.get('/', function(req, res, next) {
  res.render('equinos');
});

module.exports = router;
