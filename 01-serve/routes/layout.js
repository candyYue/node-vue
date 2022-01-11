var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/users/:userId', function(req, res, next) {
//   res.send('req:'+req.params.userId);
// });
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'layout' });
});
module.exports = router;
