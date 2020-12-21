var express=require('express');
var app=express();
var path=require('path');

app.get('/',function(req,res){
    res.sendfile(path.join(__dirname, 'viewer/index.html'));
});
app.get('/pagina1',function(req,res){
    res.send('<h1>cambellone</h1>');
});

app.listen(3000, function(){
    console.log('server attivo sulla porta 3000');
});