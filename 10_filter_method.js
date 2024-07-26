let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

myArr.filter((num) => { num > 4 })
const result = myArr.filter((num) => (num > 4))     // returns numbers greater than 4 from the array
// const result = myArr.filter((num) =>  {num > 4} )     // this does not return any value

console.log(myArr)
console.log(result)


const books = [
    { title: 'To Kill a Mockingbird', genre: 'Fiction', publish: 1960 },
    { title: 'Sapiens: A Brief History of Humankind', genre: 'Non-Fiction', publish: 2011 },
    { title: 'Guns, Germs, and Steel', genre: 'History', publish: 1997 },
    { title: 'The Immortal Life of Henrietta Lacks', genre: 'Non-Fiction', publish: 2010 },
    { title: 'A Brief History of Time', genre: 'Science', publish: 1988 },
    { title: '1984', genre: 'Fiction', publish: 1949 },
    { title: 'The History of the Ancient World', genre: 'History', publish: 2007 },
    { title: 'The Selfish Gene', genre: 'Science', publish: 1976 },
    { title: 'Thinking, Fast and Slow', genre: 'Non-Fiction', publish: 2011 },
];
//Filter can be used to work with databases
let filtered_result = books.filter((book) => book.genre === 'Science')

filtered_result = books.filter((book) => book.genre == 'Fiction' && book.publish == 1960)
console.log(filtered_result)