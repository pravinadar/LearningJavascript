function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("AVIN");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}
// if value is returned then only it goes into the variable
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username) {
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
function loginUserMessage2(username = "sam") {  // default value username = "sam"
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("Pravin")
// console.log(loginUserMessage("Pravin"))


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// val1 and val2 will take the first and second input in the function and ...num1 will take tall the others
// and since we are returning only num1, only the values in num1 will be printed


const user = {
    username: "Pravin",
    prices: 199
}

function handleObject(anyObject) { // anyObject will be any parameter but wrt this function, we will be using it as an object
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
} // if there is username and price in the object we will use as input, then we'll get the values else it will be undefined

// handleObject(user)
handleObject({    // another way of using object to input in the function
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {  // getArray is any parameter but wrt this function, we will be using it as an array
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));