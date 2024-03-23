function sayMyName(){
    console.log("A");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
    // console.log("Ayush");
    // const result = number1 + number2
    // return result
    return number1 + number2
}

const result =  addTwoNumbers(3,5)
// console.log("Result: ", result);


function loginUserMessage(username = "Sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ayush"));
// console.log(loginUserMessage("Ayush"));

function calculateCartPrice (val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));
// console.log(calculateCartPrice(200, 400, 500, 2500));

const user = {
    username: "Ayush",
    prices: 199
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price : 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,800]));