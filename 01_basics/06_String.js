const name = "Ayush"
const repoCount = 20

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('ayush-fc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('f'));

const newStr = gameName.substring(0,4)
console.log(newStr)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStrOne = "     Ayush     "
console.log(newStrOne);
console.log(newStrOne.trim());

const url = "https://ayush.com/ayush%20tiwari"
console.log(url.replace('%20', '_'))
console.log(url.includes('a'))

console.log(gameName.split('-'))





