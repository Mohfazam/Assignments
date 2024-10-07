// #week 5.2-1: Create an middleware which will count the number of requests have been made

const express = require("express");

const app = express();

let visits = 0;

function count(req, res, next){
    visits++;
    next();
}

app.get("/print", count, function(req, res){
    res.status(200).json({
        msg: "Hello ya homie"
    })
});

app.get("/visits", function(req, res){
    res.json({
        Visits: visits 
    })
});


app.listen(3000);