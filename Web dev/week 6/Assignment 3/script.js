// Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kuch bhi kardunga, front end ya backend!";

const zod  = require("zod");

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);

function verifyjwt(token){
    

    try{
        const response = jwt.verify(token, JWT_SECRET);
        return true;
    }catch(e){
        return false;
    }
}

const verify = verifyjwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzI5MTg3OTQ3fQ.5ocac--i9NlHiTqwEPl0n1JDwTViVC8oQwfNLYbLzgQ");
console.log(verify);
