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
console.log(loginUserMessage("Ayush"));