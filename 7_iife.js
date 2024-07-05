// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    // This function is defined and immediately invoked.
    // It logs 'DB CONNECTED' to the console.
    console.log(`DB CONNECTED`);
})(); // The trailing parentheses () invoke the function immediately.
// use semi-colon for these

( (name) => {
    // anonymous IIFE with parameter
    // This arrow function takes a parameter 'name' and is immediately invoked.
    // It logs 'DB CONNECTED TWO' followed by the value of 'name' to the console.
    console.log(`DB CONNECTED TWO ${name}`);
} )('pravin'); // The function is invoked with the argument 'hitesh'.
