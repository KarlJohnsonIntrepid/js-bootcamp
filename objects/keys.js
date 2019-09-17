let rabbit = {
  runs: true,
  food: ["carrot"]
};

//REturn array of keys
console.log(Object.keys(rabbit));

//REturn array of values
console.log(Object.values(rabbit));

//usinng object values
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

//get all values of the object, turn to an array and sum then
let total = Object.values(salaries).reduce((sum, val) => (sum += val));
console.log(total);
