// Base class representing a general user
class Person {
    constructor(username) {
        this.username = username; // Setting the username property when a new Person object is created
    }

    // Method to log the username of the person
    logUsername() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// Derived class representing a teacher, which extends the Person class
class Instructor extends Person {
    // Constructor method that takes username, email, and password as parameters
    constructor(username, email, password) {
        super(username); // Calling the constructor of the parent class (Person) with the username
        this.email = email; // Setting the email property specific to Instructor
        this.password = password; // Setting the password property specific to Instructor
    }

    // Method to log that a course has been added by the instructor
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Creating an instance of the Instructor class
const teaInstructor = new Instructor("chai", "chai@teacher.com", "123");

// Calling the logUsername method inherited from the Person class
teaInstructor.logUsername(); // Output: USERNAME is chai

// Creating an instance of the Person class
const userMasalaChai = new Person("masalaChai");

// Calling the logUsername method on the userMasalaChai instance
userMasalaChai.logUsername(); // Output: USERNAME is masalaChai

// Checking if teaInstructor is an instance of Person (which it is, because Instructor extends Person)
console.log(teaInstructor instanceof Person); // Output: true


// *****super()****
// super() is used in a child class to call the constructor of its parent class.
// This is important because it allows the child class to inherit properties and methods from the parent class.
// Without calling super(), the child class can't access the this keyword or inherit the parent's
// properties properly.