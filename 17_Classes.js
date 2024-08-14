// ES6 class syntax is a more modern and concise way to define a constructor function and methods.

class Account {
    // The constructor method is called automatically when a new object is created using the class.
    constructor(username, email, password) {
        this.username = username;  // 'this' refers to the new object being created
        this.email = email;
        this.password = password;
    }

    // Method to "encrypt" the password by appending 'abc' to it.
    encryptPassword() {
        return `${this.password}abc`; // Example of how a method can manipulate object properties
    }

    // Method to change the username to uppercase.
    changeUsername() {
        return `${this.username.toUpperCase()}`; // Manipulating the 'username' property of the object
    }
}

// Creating a new instance of the Account class.
const userNivarp = new Account("Nivarp", "Nivarp@gmail.com", "123");

console.log(userNivarp.encryptPassword());  // Calls the encryptPassword method on the userNivarp object
console.log(userNivarp.changeUsername());   // Calls the changeUsername method on the userNivarp object






// Before ES6, constructor functions and prototypes were used to achieve similar functionality.

function Account(username, email, password) {
    this.username = username;  // 'this' refers to the new object being created
    this.email = email;
    this.password = password;
}

// Adding methods to the prototype of the constructor function.
// This way, all instances of Account share these methods, saving memory.

Account.prototype.encryptPassword = function() {
    return `${this.password}abc`; // The 'this' keyword here refers to the object that called this method
}

Account.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`; // This method converts the username to uppercase
}

// Creating a new instance of the Account constructor function.
const userTea = new Account("tea", "tea@gmail.com", "123");

console.log(userTea.encryptPassword());  // Calls the encryptPassword method on the userTea object
console.log(userTea.changeUsername());   // Calls the changeUsername method on the userTea object


