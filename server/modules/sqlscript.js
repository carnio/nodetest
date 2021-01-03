'use strict'


const mysql=require('mysql');

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

function executeQuery (sql,callback){
    connection.connect((err)=>{
    if(err){
        console.log('errorefcgfc');
    }else{
    console.log('connessione okk');
    }});
    connection.query(sql,callback);
};

module.exports=executeQuery;