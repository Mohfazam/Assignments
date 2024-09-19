// create a function that takes an Array of objects as Input, and return the user whose age is > 18 and are male(using filters)


function vote(arr){

    return arr.filter(user => user.age >= 18 && user.gender === "male");
}

let user = [
    {
        name: "sarwar",
        age: 19,
        gender: "male"
    }, 

    {
        name: "John Doe",
        age: 26,
        gender: "male"
    },

    {
        name: "Jane Doe",
        age: 29,
        gender: "female"
    },

    {
        name: "Jimmy Doe",
        age: 15,
        gender: "male"
    }

]

let result = vote(user);
console.log(result);