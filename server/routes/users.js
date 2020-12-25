var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h2>respond with a resource</h2>');
});



router.post('/accesso', function(req, res, next) {
  let nome=req.body.nome;
  let cognome=req.body.cognome;
  let mail=req.body.mail;
  let psw=req.body.password;
  let rpsw=req.body.rpassword;
  let sesso;
  if (req.body.sesso=='maschio'){sesso='o'}else if (req.body.sesso=='femmina'){sesso='a'}else{sesso='i'};
  if (psw==rpsw){res.render('accesso', { title: 'Benvenuto',nome:nome,finale:sesso });}
  else{
      res.render('signup', { title: 'Registrazione', errore:'Attenzione!! le password non coincidono'});
  }

  
});

module.exports = router;
