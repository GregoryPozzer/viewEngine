var express = require('express');
var router = express.Router();

/* GET produtos page. */
router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Produtos' });
});

/* GET subrota 1 */
router.get('/sub1', function(req, res, next) {
  res.render('produtos-sub1', { title: 'Produtos - Sub1' });
});

/* GET subrota 2 */
router.get('/sub2', function(req, res, next) {
  res.render('produtos-sub2', { title: 'Produtos - Sub2' });
});


module.exports = router;