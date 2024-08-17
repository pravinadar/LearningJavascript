// The 'User' class is defined with a constructor, getters, and setters.
class User {
    // The constructor is called when a new instance of the class is created.
    constructor(email, password){
        // Inside the constructor, 'email' and 'password' are set using the setter methods.
        this.email = email;
        this.password = password;
    }

    // Getter for 'email'. This method is called when we access the 'email' property.
    get email(){
        // It returns the value of '_email' in uppercase.
        return this._email.toUpperCase();
    }
    
    // Setter for 'email'. This method is called when we assign a value to 'email'.
    set email(value){
        // The value provided by the user is stored in '_email'.
        this._email = value;
    }

    // Getter for 'password'. This method is called when we access the 'password' property.
    get password(){
        // It returns the value of '_password' concatenated with the string 'pravin'.
        return `${this._password}pravin`;
    }

    // Setter for 'password'. This method is called when we assign a value to 'password'.
    set password(value){
        // The value provided by the user is stored in '_password'.
        this._password = value;
    }
}

// Creating an instance of the 'User' class with the email "h@pravin.ai" and password "abc".
const pravin = new User("h@pravin.ai", "abc");

// Logs the 'email' property of the 'pravin' instance to the console.
console.log(pravin.email); // Output: H@PRAVIN.AI
