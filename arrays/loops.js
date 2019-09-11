//For Loop
let arr1 = createArray();
for(let x = 0; x < arr1.length; x++){
    console.log(arr1[x].name);
}

//While loopp
let whileCounter = 0;
do {
    console.log(arr1[whileCounter].age)
    whileCounter ++;
    if(whileCounter == 3) break;
} while (whileCounter < 5);

let counter2 = 0;
while(counter2  < 3){
    console.log(counter2);
    counter2++;
}

//For in -- loops through objct keysss
for (const key in arr1[0]) {  
    console.log(key)
}

//For of loop though values of an object
for (const animal of arr1){
    console.log(animal.name);
}

//Foreach - modifies exisiting array
arr1.forEach((value, index) => {
    console.log(value)
})

//Creates a new array
arr1.map((value) => {
    console.log(value);
})




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