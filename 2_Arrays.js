// Arrays are seen as a datatype in javascript

const myArr = [0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// push adds element in the back
// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// shift adds the element in the front 
// and unshift adds elements in the back
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice
// splice -> messes with the original array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// pushes dc_heros into marvel_heros as an array i.e. an array inside an array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // to access an element from an array which in inside another array

// const allHeros = marvel_heros.concat(dc_heros)  // this does the job
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    // spread operation : what this does is , it stores the elements of other arrays ( inside [] ) inside a new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("pravin"))
console.log(Array.from("pravin"))
console.log(Array.from({name: "pravin"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));