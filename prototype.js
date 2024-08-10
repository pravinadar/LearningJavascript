// String with extra spaces at the end
let userName = "Pravin     ";
// Another string with extra spaces
let userChannel = "nivarp     ";

// Logging the true length of the string
console.log(userName.calculateTrueLength);  // calculateTrueLength is not defined yet


let favoriteHeroes = ["thor", "spiderman"];

let heroAbilities = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
};

// Prototype Augmentation:

// Adding a method to the Object prototype (inherited by all objects)*****
Object.prototype.showPravin = function() {
    console.log(`This method is available in all objects`);
};

// Adding a method to the Array prototype (inherited by all arrays but not all objects)****
Array.prototype.greetPravin = function() {
    console.log(`Pravin says hello`);
};

// Using the augmented methods:
// This will work because heroAbilities is an object
heroAbilities.showPravin();

// This will work because favoriteHeroes is an array
favoriteHeroes.showPravin();

// This will work because favoriteHeroes is an array
favoriteHeroes.greetPravin();

// This will throw an error because greetPravin is not an Object prototype but
// an array prototype which will work only on arrays
// heroAbilities.greetPravin();

// Prototypal Inheritance:

// Base object representing a User
const BaseUser = {
    name: "nivarp",
    email: "nivarp@google.com"
};

// Object representing a Teacher, to be inherited by other objects
const TeacherRole = {
    canCreateVideo: true
};

// Object representing Teaching Support, to be inherited by TA Support
const SupportRole = {
    isAvailable: false
};

// Object representing TA Support, inheriting from SupportRole
const TASupportRole = {
    assignmentTask: 'JS assignment',
    isFullTime: true,
    __proto__: SupportRole // Old syntax for inheritance
};

// Old syntax: TeacherRole inherits from BaseUser
TeacherRole.__proto__ = BaseUser;

// Modern syntax: SupportRole inherits from TeacherRole
Object.setPrototypeOf(SupportRole, TeacherRole);

// Another string to calculate true length
let anotherUserName = "nivarpAurCode     ";

// String Prototype Augmentation:
// Adding a method to the String prototype to calculate the true length of a string (ignoring trailing spaces)
String.prototype.calculateTrueLength = function() {
    console.log(`${this}`); // Logs the string itself
    console.log(`True length is: ${this.trim().length}`); // Logs the trimmed length
};

// Using the custom true length method:
anotherUserName.calculateTrueLength();
"Pravin".calculateTrueLength();
"iceTea".calculateTrueLength();




// ***********Theory***********
// Key Concepts of Prototypal Inheritance:

// Prototype Object:
// Every JavaScript object has a hidden property called __proto__ (also known as the object's prototype).
// This prototype is itself an object, and it can have its own prototype, forming a chain called the prototype chain.

// Prototype Chain:
// When you try to access a property or method on an object, JavaScript first looks for it on the object itself.
// If it doesn't find it, it looks for the property on the object's prototype (__proto__).
// This search continues up the prototype chain until the property is found or the end of the chain is reached 
// (which is typically Object.prototype, the root of all objects in JavaScript).

// Inheritance in Action:
// Suppose you have an object Parent with a method sayHello.
// If you create a Child object that has Parent as its prototype, Child will inherit the sayHello method from Parent.
// Even though sayHello is not directly on Child, you can still call it because of the prototype chain.

// Methods in the object prototype can be accessed by arrays,strings,etc. But the methods in the {arrays,strings,etc} prototype
// is only accessible to {arrays,strings,etc} and not any other objects