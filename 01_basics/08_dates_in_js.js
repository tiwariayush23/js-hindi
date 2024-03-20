//  Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); // Wed Mar 20 2024 15:01:05 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Wed Mar 20 2024
// console.log(myDate.toISOString()); // 2024-03-20T15:02:56.137Z
// console.log(myDate.toJSON()); // 2024-03-20T15:02:56.137Z
// console.log(myDate.toLocaleDateString());// 3/20/2024
// console.log(myDate.toLocaleString()); // 3/20/2024, 3:02:56 PM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());





let myTimeStamp = Date.now()
 // console.log(myTimeStamp);
 // console.log(myCreatedDate.getTime());
// console.log(Math.floor (Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1);
// console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
});
console.log(newDate);
