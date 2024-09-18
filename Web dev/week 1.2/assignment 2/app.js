// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others Sarwar, your age is 18)

function greet(user){
    console.log("Hi " + user.name + "\nGender: "+ user.gender + "\nage: " + user.age);
    
}

let details = {
    name: "sarwar", 
    age: 18,
    gender: "Male"
}

greet(details);