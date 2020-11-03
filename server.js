const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
})

app.get('/map', function(req,res){
    res.sendFile(path.join(__dirname,'build','map.html'));
})

app.get('/find', function(req,res){
    res.sendFile(path.join(__dirname,'build','find.html'));
})

app.listen(8080);