// Type 1 of writing a promise
const promise_one = new Promise(function(resolve, reject){
    // do any async task here
    // like db calls , cryptography, networking
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // when we call resolve , it goes to .then()
    }, 1000)
})

promise_one.then(function(){
    console.log("Promise consumed");
})

// Type 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// Another useCase
const third_promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "pnad", email: "pnad@example.com"})
    }, 1000)
})

third_promise.then(function(user){
    console.log(user);
})


// Another useCase
const fourth_promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "pravin", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


// know about chaining
fourth_promise
 .then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    // setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    // }, 1000)
});

// Async function
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()       // use await for things that might take time
//         console.log(data);                       // such as work in db calls , cryptography, networking
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// Fetch
fetch('https://api.github.com/users/pravinadar')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all => check about this