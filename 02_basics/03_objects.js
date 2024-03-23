//   singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Ayush", 
    "full name": "Ayush Tiwari",
   [ mySym]: "mykey1",
    age: 22,
    location: "Indore",
    email: "tayush377@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser [mySym]);

JsUser.email = "ayush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ayush@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());