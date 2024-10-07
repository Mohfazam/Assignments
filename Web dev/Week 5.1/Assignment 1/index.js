const express = require("express");

const app = express();

function add(a,b){
    return Number(a)+Number(b);
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

app.get("/add", function(req, res){
    let x = req.query.a;
    let y = req.query.b;
    let ans = add(x, y);
    res.status(200).json({
        msg: `the sum is ${ans}`
    })
});

app.get("/subtract", function(req, res){
    let x = req.query.a;
    let y = req.query.b;
    let ans = subtract(x, y);
    res.status(200).json({
        msg: `the subtraction is ${ans}`
    })
});

app.get("/multiply", function(req, res){
    let x = req.query.a;
    let y = req.query.b;
    let ans = multiply(x, y);
    res.status(200).json({
        msg: `the multiply is ${ans}`
    })
});


//accepting dynamic arguments usinf " /: "
app.get("/divide/:a/:b", function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let ans = divide(x, y);
    res.status(200).json({
        msg: `the divide is ${ans}`
    })
});


app.listen(3000);