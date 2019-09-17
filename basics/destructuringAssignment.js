let [a, b, c] = ["karl", "dan", "stan"];
console.log(a);
console.log(c);

let [aa, , cc] = ["karl", "dan", "stan"];
console.log(aa);
console.log(cc);

let [one, ...rest] = ["1", "2", "3", "4"];
console.log(one);
console.log(rest);

////////////////

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let { title, width, height } = options;
console.log(title);
console.log(height);

//Add missing property
let { name = "karl" } = options;
console.log(name);

//get one value from the object
let title1 = options.title;
console.log(title1);
//Get value using destructuring assigment
let { title: title2 } = options;
console.log(title2);

//Splt an object
let { title: name1, ...dimensions } = options;
console.log(name1);
console.log(dimensions);

//Paramenter destucturing......
//notice how this automatically destuctures into parameters
function logSomething({ name: name = "something", action: action = "run", secondAction: secondAction = "stop" }) {
  console.log(`The ${name} ${action} then ${secondAction}`);
}

let ops = {
  name: "karl",
  action: "run",
  secondAction: "stop"
};
//We can pass the object or leave empty to use the default values.
logSomething({});
