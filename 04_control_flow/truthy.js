const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("don't have user email");
}

// falsy value

// False, 0, -0, BigInt 0n, "", null, undefined, Nan

//  truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }


const emptyobj = {}
if (Object.keys(emptyobj).length === 0) { // conditions for checking an object is empty or not
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
//    val1 = undefined ?? 15
    val1 = null ?? 10 ?? 20



console.log(val1);

//  Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");