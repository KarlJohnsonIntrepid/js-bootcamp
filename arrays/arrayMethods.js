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

//Reduce

//Reduce right

//Sort

//Map 

//Sort



function createArray() {
    return ["mouse", "rat", "vole", "fox", "dog", "rabbit"]
}