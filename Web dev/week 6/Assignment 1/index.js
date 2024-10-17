// Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

const jwt = require("jsonwebtoken");
const JWT_SECRET = "kuch bhi kardunga, front end ya backend!";

const zod  = require("zod");

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);


function signjwt(username, password){

    const usernameresponse = emailschema.safeParse(username);
    const passwordresponse = passwordschema.safeParse(password);

    if(!usernameresponse.success || !passwordresponse.success){
        return null;
    }


    const token = jwt.sign({
        username: username
    }, JWT_SECRET);

    return token;
}






const sign = signjwt("test@gmail.com", "testpassword");

console.log(sign);

