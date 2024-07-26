const Nums = [1, 2, 3]


const Total = Nums.reduce(function (acc, currval) {     // 'reduce' method returns a single value 
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)   // acc ( accumulator ) is initialized as 0
console.log('The final value is '+Total)
// run the above code and you'll know what it does

// Explanation
// The code snippet calculates the sum of elements in the Nums array using the reduce method.
// + acc (accumulator) starts at 0 (initial value).
// + For each element (currval) in Nums, it logs acc and currval.
// + It then updates acc by adding currval.
// + Finally, Total holds the sum of all elements in Nums.


const cartItems = [
    {
        name: "JavaScript Course",
        cost: 2999
    },
    {
        name: "Python Course",
        cost: 999
    },
    {
        name: "Mobile Development Course",
        cost: 5999
    },
    {
        name: "Data Science Course",
        cost: 12999
    },
]

const totalAmount = cartItems.reduce((total, item) => total + item.cost, 0)
// reduce method using arrow function
// here 'total' is the accumulator which is initializewd as 0

console.log('The total amount is '+totalAmount);


