var express = require('express');
var router = express.Router();
const products=require('../products.json');
const multipart= require ('connect-multiparty');
const multipartMiddleware=multipart({uploadDir:'./uploads'});
const executeQuery=require('../modules/sqlscript.js');

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

router.get('/product/:article', function(req, res, next) {
let articolo=req.params.article;
let prodotto=products.find(el=>el.article==articolo);
//prodotto["color"]=req.params.color;
res.render('product',prodotto);
});

router.get('/shop', (req, res) => {
executeQuery('CREATE DATABASE xxx',(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('database cfeato');
    });
});
/*
router.get('/shop', function(req, res, next) {
  res.render('shop', {products:products});
});*/

router.get('/upload', function(req, res, next) {
  res.render('upload', {title:'Upload file'});
});
router.post('/upload',multipartMiddleware, function(req, res, next) {
  res.send('File caricato con successo');
});

module.exports = router;
 /*extends layout

block content
 div.shop
  each product in products
   a(href=`/product/${product.article}`)
    div.card
     img#ss(src=`${product.immage}`, alt="immagine bho")
     h5#ll #{product.price}*/