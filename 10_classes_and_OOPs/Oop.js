const user = {
    username: "Ayush",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Ayush", 12, true)
const userTwo = new User("Chai aur Code", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);