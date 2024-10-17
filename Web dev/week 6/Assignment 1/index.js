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

function decodejwt(token){
    const decoded = jwt.decode(token);

    if(decoded){
        return true;
    }
    else{
        return false;
    }
}

function verifyjwt(token){
    

    try{
        const response = jwt.verify(token, JWT_SECRET);
        return true;
    }catch(e){
        return false;
    }
}


//Below code will return an jwt
// const sign = signjwt("test@gmail.com", "testpassword");
// console.log(sign);


//below code will return null (as there is no proper emailid and password.length < 6)
const sign = signjwt("test", "test");
console.log(sign);

//below code will return true as the function parameter is an jwt which can be decoded(not verified)
// const decode = decodejwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzI5MTg3OTQ3fQ.5ocac--i9NlHiTqwEPl0n1JDwTViVC8oQwfNLYbLzgQ");
// console.log(decode);

//below code will return false as the jwt as the function parameter is invalid
const decode = decodejwt("hello world");
console.log(decode);

//the below code will return as the jwt passed to the function is signed by the JWT_SECRET which is available in this backend
// const verify = verifyjwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzI5MTg3OTQ3fQ.5ocac--i9NlHiTqwEPl0n1JDwTViVC8oQwfNLYbLzgQ"); 
// console.log(verify);

//the below code will return false as the jwt as function parameter cant be verified by the JWT_SECRET which is present in this Backend
const verify = verifyjwt("invalidjwt.invalidjwt.invalidjwt"); 
console.log(verify);
