var express = require('express');
var router = express.Router();
const products=require('../products.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/compra', function(req, res, next) {
  res.render('compra', { title: 'Truffa'});
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Registrazione', errore:''});
});

router.get('/product/:article/:color', function(req, res, next) {
let articolo=req.params.article;
let prodotto=products.find(el=>el.article==articolo);
prodotto["color"]=req.params.color;
res.render('product',prodotto);
});

router.get('/shop', function(req, res, next) {
let prodotto=products;
  res.render('shop', prodotto);
});

module.exports = router;
