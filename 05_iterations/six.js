// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach(  (item) => {
//     // console.log(item);
//     return item
// }  )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =  myNums.filter(  (num) => num > 4)
// console.log(newNums);

// const newNums =  myNums.filter(  (num) => {
//   return  num > 4 // use return keyword while using {} these brackets in .filter method 
// })
// console.log(newNums);

// const newNums = []

// myNums.forEach(  (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    
       { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
        {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
        {title: 'Book Three', genre: 'History', publish: 1999, edition: 2008},
        {title: 'Book Four', genre: 'Non-Fiction', publish: 1990, edition: 2011},
        {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
        {title: 'Book Six', genre: 'Fiction', publish: 1989, edition: 2010},
        {title: 'Book Seven', genre: 'History', publish: 1987, edition: 2010},
        {title: 'Book Eight', genre: 'Non-Fiction', publish: 1986, edition: 1996},
        {title: 'Book Nine', genre: 'Science', publish: 2005, edition: 2020},
        {title: 'Book Ten', genre: 'Non-Fiction', publish: 2001, edition: 2023}
    
];

let userBooks = books.filter(  (bk) => bk.genre === 'History'  )
 userBooks = books.filter(  (bk) => {
        return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);