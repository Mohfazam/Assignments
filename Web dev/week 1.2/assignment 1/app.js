// Write a function that takes a user as an input and greets them with their name and age

function greet(user){
    console.log("Hello " + user.name);
    console.log("Invloved in " + user.course);

}


let user = {
    name: "Sarwwar",
    course: "Webdev"
}

greet(user);