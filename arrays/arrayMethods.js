//Filter
let arr1  = createArray();
let filtered = arr1.filter(x => x !== "fox" && x != "rabbit");
console.log(filtered);
console.log(arr1)

//find - finds the first
let arr2 = createArray();
let found = arr2.find( x=> x === "fox");
console.log(found);

//Find index - finds the index of the first matching
let arr3 = createArray();
let foundIndex = arr2.findIndex(x=> x === "fox");
console.log(foundIndex);

//Some - checks if any is returned
let arr4 = createArray();
let some = arr4.some(x=> x === "fox");
console.log(some);

//Every - checks if all values match the condition
let arr5 = createArray();
let every = arr5.every(x=> x === "fox");
console.log(every);

//Sort numbers
let arr6 = createNumberArray();

//Sort ACS 
let sorted = arr6.sort();
console.log(arr6);
let sortDesc = sorted.reverse();
console.log(sortDesc);

//Sort DESC
let arr7 = createNumberArray();
//Use plus ehere in the function for DESC
let sorted2 = arr7.sort((a, b)=> a + b);
console.log(sorted2);

//Sort Strings
let arr8 = createArray();
arr8.sort();
console.log(arr8);
arr8.reverse();
console.log(arr8);

//String sort reverse
let arr9  = createArray();
arr9.sort((a,b) => (a).localeCompare(b));
console.log(arr9);
arr9.sort((a,b) => (b).localeCompare(a));
console.log(arr9);


//Map - calls the function once for every function in the array
let arr10 = createArray();
let mapped = arr10.map(x => x + "_animal");
console.log(mapped);

//Reduce

//Reduce right



function createArray() {
    return ["mouse", "rat", "vole", "fox", "dog", "rabbit"]
}

function createNumberArray() {
    return [99,56,3,2,56,246,3]
}