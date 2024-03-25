const user = {
    username: "ayush",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai () {
//     let username = "ayush"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "ayush"
//     console.log(this.username);
// }

const chai =  () => {     // => arrow function declaration
    let username = "ayush"
    // console.log(this.username);
    console.log(this);
}


// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // Implicit return
// const addTwo = (num1, num2) =>  ( num1 + num2 )
// const addTwo = (num1, num2) =>  {username: "Ayush"}
const addTwo = (num1, num2) =>  ({username: "Ayush"})


console.log(addTwo(5,6));