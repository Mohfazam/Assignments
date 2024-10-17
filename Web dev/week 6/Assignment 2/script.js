// Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise

const jwt = require("jsonwebtoken");
const JWT_SECRET = "kuch bhi kardunga, front end ya backend!";

const zod  = require("zod");

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);

function decodejwt(token){
    const decoded = jwt.decode(token);

    if(decoded){
        return true;
    }
    else{
        return false;
    }
}


const decode = decodejwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzI5MTg3OTQ3fQ.5ocac--i9NlHiTqwEPl0n1JDwTViVC8oQwfNLYbLzgQ");

console.log(decode);