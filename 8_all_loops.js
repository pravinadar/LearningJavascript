// ***ForLoop

// for (let index = 0; index < array.length; index++) {
// }

//***Whille loop

// while (condition) {
// }

//***Do-While loop

// do {
// } while (condition);

//***for of

const arr = [1, 2, 3, 4, 5]
// for (const iterator of arr) { // from start to end of array
//     console.log(iterator)
// }


// for in
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


// forEach

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){  // make a callback function in .foreach() // this is one way of using forEack
    console.log(val);   // the difference between using a normal function and a callback in aforEach loop is that a forEach loop with
} )                   // a normal function will look like 'coding.forEach( function nameOfFunction(val){}' unlike what we have now which is a loop using callback function


coding.forEach( (item) => {   // arrow function in forEach
    console.log(item);
} )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // using .forEach with a readyMade function

// coding.forEach( (item, index, arr)=> { access item,index and associated array
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { //  how to access object properties in loop
    
    console.log(item.languageFileName);
} )