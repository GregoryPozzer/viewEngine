var express = require('express');
var router = express.Router();

/* GET batata page. */
router.get('/', function(req, res, next) {
  res.render('batata', { title: 'Batata' });
});

/* GET subrota 1 */
router.get('/sub1', function(req, res, next) {
  res.render('batata-sub1', { title: 'Batata - Sub1' });
});

/* GET subrota 2 */
router.get('/sub2', function(req, res, next) {
  res.render('batata-sub2', { title: 'Batata - Sub2' });
});
module.exports = router;
