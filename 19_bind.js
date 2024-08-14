// The primary use of bind is to fix the value of this within a function.
// This is helpful when passing methods as callbacks or when the context might otherwise get lost.

const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// console.log(`Hello, my name is ${person.name}`);

const greetFunction = person.greet; // Assigning the method to a variable
greetFunction(); // Output: "Hello, my name is undefined" (because `this` is now undefined or the global object)

const boundGreetFunction = person.greet.bind(person); // Binding the `this` context to `person`
boundGreetFunction(); // Output: "Hello, my name is Alice"


// Partial Application of Bind

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2); // Creates a new function where `a` is always 2
console.log(double(5)); // Output: 10 (2 * 5)

const triple = multiply.bind(null, 3); // Creates a new function where `a` is always 3
console.log(triple(5)); // Output: 15 (3 * 5)


// *********Good Explanation*********

// How this Works in Methods:
// When you call a method on an object, this refers to the object on which the method was called.

// Example 1
// const person = {
//     name: "Alice",
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// person.greet(); // `this` refers to `person`, so this.name is "Alice"

// If you assign the method to a standalone variable and then call it, the context (this) is lost
// because the function is no longer being called as a method of the object.

// Example 2
// const greetFunction = person.greet; // Assigns the method to a variable
// greetFunction(); // Now `this` is not bound to `person`

