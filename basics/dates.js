//Create a date of now
let date = new Date();
console.log(date);

//Measure time
let now = Date.now();
console.log(now);
let then = Date.now();

console.log(`Time:  ${then - now} ms`);

//Date from date
let date2 = new Date("2019-10-10");
console.log(date2);

//Date with time
let date3 = new Date(2019, 10, 10, 10, 10, 0);
console.log(date3);

//Get day 0 is Sunday
console.log(date3.getDay());
console.log(date3.getFullYear());
