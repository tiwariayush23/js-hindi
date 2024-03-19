//  Primitive

// 7 types : String, Number, Boolean, null, undefined
//  Symbol, BigInt

// const score = 100
// const scoreValue = 100.3



// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)





//  Reference (Non Primitive)

// Array, Objects, Functions

// const heros = ["Shaktiman", "Naagraj", "Doga"] // Array
// console.log(heros)
// let myObj = { //objects
//     name: "Ayush",
//     age: 22
// }
// console.log(myObj)
// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myFunction)
// console.log(typeof anotherId)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Ayushtiwaridotcom"
let anotherName = "Chai aur Code"
console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ayush@google.com"
console.log(userOne.email);
console.log(userTwo.email);