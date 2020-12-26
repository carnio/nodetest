var express = require('express');
var router = express.Router();
const products=require('../products.json');
const multipart= require ('multiparty');
const multipartMiddleware=multipart({uploadDir:'./uploads'});

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

router.get('/upload', function(req, res, next) {
  res.render('upload', {title:'Upload file'});
});
/*
router.post('/upload',multipartMiddleware, function(req, res, next) {
  res.send('File caricato con successo');
});
*/
module.exports = router;
