const setUsername = function (username) {
    this.username = username; // 'this' refers to the object that calls this function
    console.log(`setUsername function called`);
}

const user = function (username, age, birthYear) {
    // This line just calls the function, but 'this' inside 'setUsername' will not refer to the new user object
    // setUsername(username);

    // This line calls 'setUsername' and ensures 'this' refers to the new user object
    setUsername.call(this, username); // Correctly sets 'this.username' on the new user object

    // Alternatively, you could just do:
    // this.username = username;

    this.age = age;
    this.birthYear = birthYear;
}

const Pravin = new user("Pravin", 20, 2004);
console.log(Pravin);

// Constructor Functions: Functions used to create new objects. When used with new, a new object is created, and this inside the constructor refers to that object.
// The call Method: Used to call a function with a specified this value. This is crucial when you need to control what this refers to inside a function.
// this Keyword: Refers to the object that is currently being acted upon. Its value depends on how the function is called.
