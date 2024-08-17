// The 'User' function is a constructor function that creates a new User object.
function User(email, password) {
    // Two private properties, '_email' and '_password', are initialized.
    this._email = email;
    this._password = password;

    // Define a getter and setter for the 'email' property using 'Object.defineProperty'.
    Object.defineProperty(this, 'email', {
        // Getter method: this is called when 'email' is accessed.
        get: function() {
            // Returns the '_email' property in uppercase.
            return this._email.toUpperCase();
        },
        // Setter method: this is called when 'email' is assigned a new value.
        set: function(value) {
            // Sets the '_email' property to the new value provided.
            this._email = value;
        }
    });

    // Define a getter and setter for the 'password' property using 'Object.defineProperty'.
    Object.defineProperty(this, 'password', {
        // Getter method: this is called when 'password' is accessed.
        get: function() {
            // Returns the '_password' property in uppercase.
            return this._password.toUpperCase();
        },
        // Setter method: this is called when 'password' is assigned a new value.
        set: function(value) {
            // Sets the '_password' property to the new value provided.
            this._password = value;
        }
    });
}

// Create a new instance of the User object.
const user = new User("john@example.com", "password123");

// Access the 'email' property using the getter method.
console.log(user.email); // Output: JOHN@EXAMPLE.COM
