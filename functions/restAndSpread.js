//Rest parameter, converts array into list of parameters
let max = Math.max(1,2,3);
console.log(max);

//Rest parameter is used in method properties...
let arr = [1,2,3,4,5];
let max2 = Math.max(...arr);
console.log(max2);

//Spread operator - ---- turns array into list of properties
console.log(...arr);

let colours = ['red', 'blue']
console.log(makeColourSet('karl', 'red', 'blue', 'yellow'))

function makeColourSet(name, ...colours) {

    let set = {
        name,
    }

    //Old way of viewing arguments
    console.log(arguments);

    //Viewing arguments of the rest parameter
    for (const colour of colours) {
       console.log(colour);
    }

    return set;
}

//mergee arras
let merge1 = ["karl", "Johnson"];
let merge2 = ["eros", "Hider"];

console.log([...merge1, ...merge2, "Married"]);
console.log([..."KARL"]);

