const express = require('express');
const app = express();
const port = 3001;

const db = require('./mongoose');

app.use(express.static(__dirname+'/'));

app.post('/api/login',function(req,res){
    var results = [ {
        title: 'c',
        author:'rahul',
        level: 'beginner'
    }, {
        title: 'c++',
        author:'rahul',
        level: 'beginner'
    }, {
        title: 'javascript',
        author:'rahul',
        level: 'beginner'
    }];
    res.json(results);
})

app.listen(port,function(err){
    if(err){
        console.log('there is an error in the server',err);
        return;
    }
    console.log('server is running on port:',port);
})