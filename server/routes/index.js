var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',link:'/compra',user:'Alessandro',prodotto:'Scopa cm.80 4 ranghi' });
});

router.get('/compra', function(req, res, next) {
  res.render('compra', { title: 'Truffa'});
});

module.exports = router;
