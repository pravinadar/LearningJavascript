const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// adds 10 to every element in the array and stores it in the newNums variable


const newNums = myNumers    // Chained methods
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
// the first method will work first then the result will go be worked on by the second method and it goes so on

console.log(newNums);