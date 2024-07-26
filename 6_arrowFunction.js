const user = {
    username: "pravin",
    price: 9876543210,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    // Includes a method welcomeMessage that uses this to refer to the object itself (user).

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //In Node.js or non-strict mode, 'this' refers to the global object

// function aFunction(){
//     let username = "pravin"
//     console.log(this.username);
// }

// aFunction()

// const aFunction = function () {
//     let username = "pravin"
//     console.log(this.username);
// }

const aFunction =  () => {      // arrow function
    let username = "pravin"
    console.log(this);
}


// aFunction()

// const addTwo = (num1, num2) => {    
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2    // Single-line arrow function without curly braces returns the sum directly

// const addTwo = (num1, num2) => ( num1 + num2 )   // Single-line arrow function with parentheses around the sum expression same as above
// no need to use 'return' if done this way this method returns what is in the ()


const addTwo = (num1, num2) => ({username: "pravin"})   // Arrow function returning an object with 'username' property
// returns object and not value. 
// if used {} then use return

console.log(addTwo(3, 4)) // Logs the result of calling 'addTwo' with arguments 3 and 4
// Logs {username: "pravin"}
