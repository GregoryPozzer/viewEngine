var express = require('express');
var router = express.Router();

/* GET igreja page. */
router.get('/', function(req, res, next) {
  res.render('igreja');
});

/* GET subrota 1 */
router.get('/sub1', function(req, res, next) {
  res.render('igreja-sub1', { title: 'Igreja - Sub1' });
});

/* GET subrota 2 */
router.get('/sub2', function(req, res, next) {
  res.render('igreja-sub2', { title: 'Igreja - Sub2' });
});

module.exports = router;
