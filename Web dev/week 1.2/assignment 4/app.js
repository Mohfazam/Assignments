// create a function that takes an Array of objects as Input, and return the user whose age is > 18 and are male

function vote(arr){
    console.log("\nEligible Voters are: ");
    for(let i = 0; i < arr.length; i++){
        if(arr[i].age >= 18 && arr[i].gender === "male"){
            console.log("\nVoter detais:\n Name: " + arr[i].name +"\nAge: " + arr[i].age + "\nGender: " + arr[i].gender);
        }
    }
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

vote(user);