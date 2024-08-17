const User = {
    // Private properties '_email' and '_password' are defined.
    _email: 'h@hc.com',
    _password: "abc",

    // Getter for the 'email' property.
    get email() {
        // Returns the '_email' property in uppercase.
        return this._email.toUpperCase();
    },

    // Setter for the 'email' property.
    set email(value) {
        // Sets the '_email' property to the new value provided.
        this._email = value;
    }
}

// Creating a new object 'tea' that inherits from 'User' using Object.create().
const tea = Object.create(User);

// Accessing the 'email' property using the getter method.
console.log(tea.email); // Output: H@HC.COM
