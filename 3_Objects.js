//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pravin",
    "full name": "Pravin N", 
    [mySym]: "mykey1",   //[] is used so thst the global mySym is accessed
    age: 18,
    location: "Jaipur",
    email: "Pravin@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "myemail@one.com"
// Object.freeze(JsUser)
JsUser.email = "myemail@two.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



// Symbol: Symbol is a built-in object whose constructor returns a unique symbol.

// Symbols are often used as unique property keys in objects.

// mySym is a symbol with the description "key1".

// Object Literal: JsUser is defined using an object literal.

// name: a regular string property.

// "full name": a string property with a space in the key, demonstrating that keys can be more than one word if enclosed in quotes.

// [mySym]: a computed property name using the mySym symbol. 

// This ensures the property is unique and can't be accessed by normal string keys.

// Other properties like age, location, email, isLoggedIn, and lastLoginDays are straightforward key-value pairs.

// Dot Notation: JsUser.email accesses the email property directly.

// Bracket Notation: JsUser["email"] accesses the email property using a string key. 

// This is useful when the key is dynamic or contains special characters.

// Accessing "full name" must be done using bracket notation due to the space in the key.

// Accessing [mySym] is done using bracket notation with the symbol, which ensures the correct unique property is accessed.

// You can modify properties of an object directly unless the object is frozen.

// The square brackets ([]) in object literals allow for dynamic property keys.

// Using [mySym] as a property key accesses the global mySym symbol.

// Symbols ensure that the property key is unique and avoids name collisions.
