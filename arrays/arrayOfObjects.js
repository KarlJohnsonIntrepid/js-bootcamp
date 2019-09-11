//Remove
let arr1 = createArray();
let removed = arr1.filter(x => x.type != "mammal");
console.log(removed);

//Existence
let arr2 = createArray();
let exists = arr2.some(x => x.name === "dog");
console.log(exists);

//Find
let arr3 = createArray();
let dog = arr3.find(x => x.name == "dog");
console.log(dog);

//Some
let arr4 = createArray(0);
let someFish = arr4.some(x => x.type == "fish");
console.log(someFish);

//Map
let arr5 = createArray();
let older = arr5.map(x => (x.age = x.age + 10));
console.log(older);

//Every
let arr6 = createArray();
let olderThan1 = arr6.every(x => x.age > 1);
console.log(olderThan1);

//Sort
let arr7 = createArray();
let sortedByAge = arr7.sort((a, b) => a.age - b.age);
console.log(sortedByAge);

let arr8 = createArray();
let sortedByAgeDesc = arr8.sort((a, b) => a.age + b.age);
console.log(sortedByAgeDesc);

//Sum
let arr9 = createArray();
let sum = arr9.reduce((sum, num) => sum + num.age, 0);
console.log(sum);

//SUM 2 - use map to simplify the array.
let sum2 = arr9.map(x => x.age).reduce((a, b) => a + b);
console.log(sum2);

//Max
let arr10 = createArray();
let max = arr10.reduce((max, min) => (min.age > max.age ? min : max));
console.log(max);

//Min
let arr11 = createArray();
let youngest = arr11.reduce((min, num) => (min.age > num.age ? num : min));
console.log(youngest);

//Add in position

function createArray() {
  let animals = [];
  animals.push({ id: 1, name: "dog", type: "mammal", age: 5 });
  animals.push({ id: 2, name: "cat", type: "mammal", age: 2 });
  animals.push({ id: 3, name: "fish", type: "fish", age: 4 });
  animals.push({ id: 4, name: "lizard", type: "reptile", age: 5 });
  animals.push({ id: 5, name: "horse", type: "mammal", age: 5 });
  animals.push({ id: 6, name: "bee", type: "insect", age: 5 });
  animals.push({ id: 7, name: "crow", type: "mammal", age: 10 });
  return animals;
}
