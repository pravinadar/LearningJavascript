// Another two methods to make objects
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {         // object inside a object inside another object
            firstname: "nivarp",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);  // to access object inside a object inside another object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// The syntax const obj3 = { obj1, obj2 }; would create 
// a nested structure where obj3 contains obj1 and obj2 as properties, rather than merging their contents.


// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}   // spread operation like did for arrays
// console.log(obj3);
// Output:
// {
//    1: "a",
//    2: "b",
//    3: "a",
//    4: "b"
// }


const users = [
    {
        id: 1,
        email: "myemail@mail.com"
    },
    {
        id: 2,
        email: "yemail@mail.com"
    },
    {
        id: 3,
        email: "mail@mail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "nivarp"
}

// course.courseInstructor

// Extracting courseInstructor and renaming it to instructor
const {courseInstructor: instructor} = course;

console.log(instructor); // Outputs: "nivarp"
// console.log(courseInstructor); // This would cause an error because courseInstructor is not 
// defined in this scope.

// After destructuring, courseInstructor is no longer directly accessible unless using course.courseInstructor. 
// The destructured variable is instructor.


// [
//     {},
//     {},
//     {}
// ]
