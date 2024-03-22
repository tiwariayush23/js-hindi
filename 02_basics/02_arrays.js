const marvel_Heroes = ["Thor", "Ironman", "Spiderman"]
const dc_Heroes = ["Superman", "Flash", "Batman"]

// marvel_Heroes.push(dc_Heroes)

// console.log(marvel_Heroes);
// console.log(marvel_Heroes[3][1]);

// const allHeroes = marvel_Heroes.concat(dc_Heroes)
// console.log(allHeroes);

const all_new_heroes = [...marvel_Heroes, ...dc_Heroes] // Spread operator

// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);




console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name: "Ayush"}));  // Interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
