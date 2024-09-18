// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others Sarwar, your age is 18) Also tell the user if they are legal to vote or not

function greet(user){
    console.log("Hi " + user.name + "\nGender: " + user.gender + "\nAge: " + user.age);
    (user.age >= 18) ? console.log("You can vote!") : console.log("You cannot vote");
}

let details = {
    name: "sarwar",
    age: 19,
    gender: "Male"
}

greet(details);