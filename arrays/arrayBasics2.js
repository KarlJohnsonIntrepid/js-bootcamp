//Remove from an array 1 - using splice
let arr = ["dog", "cat", "horse"];
let index = arr.indexOf("cat");
console.log(arr.splice(index, 1));
console.log(arr);

//Remove using filter
let arr2 = ["dog", "cat", "horse"];
let filtered = arr2.filter(x=> x != "cat");
console.log(filtered);

//add to array using splce
let arr3 = ["dog", "cat", "horse"];
arr3.splice(1,0, "rat");
console.log(arr3);

//Check for existence
console.log(arr3.includes("rat"));
console.log(arr3.indexOf("rat") > -1)

//concat
let arr4 = arr.concat(arr2);
console.log(arr4);

//create char array
var chars = Array.from("ABCDEFG");
console.log(chars);