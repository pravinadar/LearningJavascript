// It is a programming paradigm
// Object => collection of properties and methods

// 4 Pillars
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


// Object

const user = {
    user_name: "Pravin",
    user_id: 1234,
    is_logged_in:true,

    get_user_details: function(){
        console.log(this);
        // console.log(this.is_logged_in);
    }
}

user.get_user_details()

// Properties (user_name, user_id, is_logged_in): These are attributes that store data related to the user, 
// such as their name, ID, and login status.

// Method (get_user_details): This is a function attached to the user object. 
// Methods in objects are functions that can access and manipulate the object's data.

// this Keyword:  In JavaScript, this refers to the current object context. 
// When used inside a method (like get_user_details), this refers to the object that owns the method (user in this case).
// Therefore, this inside get_user_details refers to the user object itself.
// Using this:
// Inside get_user_details, console.log(this) will output the entire user object because this refers to user when get_user_details 
// is called as user.get_user_details().
// Accessing Properties with this:

// You can also access properties of the object using this.property_name. 
// For example, this.user_name would access the user_name property of the user object.



// Constructor Function

function Cat(name, isHandicapped, ageInMonths)
{
    this.name=name;
    this.isHandicapped=isHandicapped;
    this.ageInMonths=ageInMonths;

    this.aboutCat=function (){
        console.log(`Cat's name is ${this.name}`)
        console.log(`${this.name} is ${this.ageInMonths} months old`)
        if(this.isHandicapped==true)
        {
            console.log(`${this.name} is handicapped`)
        }
        else
        {
            console.log(`${this.name} is very healthy`)

        }
        
    }
}

// const Tom=new Cat("Tom",false,24);
const sugar= new Cat("Sugar",true,14);
sugar.aboutCat();





// Function as an object in JavaScript
function multiplyBy7(num) {
    return num * 7;
}

// Adding a property to the function object
multiplyBy7.factor = 3;

console.log(multiplyBy7(5));   // Outputs: 35
console.log(multiplyBy7.factor); // Outputs: 3

// Logging the function's prototype, which is an object
// This is used when the function is used as a constructor
console.log(multiplyBy7.prototype); // Outputs: {}

// Constructor function to create new objects
function createPlayer(playerName, level) {
    // 'this' refers to the new object being created
    this.playerName = playerName;
    this.level = level;
}

// Adding a method to the prototype of createPlayer
// This method will be shared among all instances of createPlayer
createPlayer.prototype.levelUp = function() {
    this.level++;
}

// Another method added to the prototype
createPlayer.prototype.showStats = function() {
    console.log(`Player: ${this.playerName}, Level: ${this.level}`);
}

// Correct usage of the constructor function with 'new'
const warrior = new createPlayer("warrior", 10);
const mage = new createPlayer("mage", 15);

// Incorrect usage of the constructor function without 'new'
// This will cause 'this' to refer to the global object (or undefined in strict mode)
const rogue = createPlayer("rogue", 20); // Incorrect

// Using the methods defined on the prototype
warrior.showStats(); // Outputs: "Player: warrior, Level: 10"
mage.levelUp();
mage.showStats(); // Outputs: "Player: mage, Level: 16"

// rogue.showStats();

// rogue will be undefined because 'new' was not used correctly
// and 'this' didn't point to a new object
