let promise = new Promise(function(resolve, reject) {
  //reject("Failed");
  setTimeout(() => {
    console.log("doing work");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("doing work a chained work for");

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("doing more work further down the chain");
            resolve("done");
          }, 1000);
        });
      }, 1000);
    });
  }, 1000);
});

//Promisify
function loadScript(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("loading script - " + name);
      resolve("done");
    }, 1000);
  });
}

//Chaning promis functions...
loadScript("jquery.js")
  .then(loadScript("vue"))
  .then(loadScript("react"));


  //Wait for all to return, returns an array of values
  function waitAll () {
      return Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
        new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
        new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
      ])
  }

waitAll().then((val) => console.log(val));

//Using map function here to get all script promises and then calling within Promise.all
let scripts = ["jquery2", "vue2", "react2"];
let scriptPromises = scripts.map(x=> loadScript(x));
Promise.all([
  ...scriptPromises
]).then(() => console.log("all scripts loaded"));



//an async function returns a resolved promise
async function background () {
  return setTimeout(() => console.log("asyncing"), 3000)
}
//Not this returns the promise straight away before the method is finished
background().then(console.log("async returns a promises..."));

async function backgroundWaited () {
  return await promise;
}
//Not this returns the promise straight away before the method is finished
backgroundWaited().then(console.log("async waited returns a promises..."));


