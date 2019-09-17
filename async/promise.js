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

function loadScript(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("loading script - " + name);
      resolve("done");
    }, 1000);
  });
}

loadScript("jquery.js")
  .then(loadScript("vue"))
  .then(loadScript("react"));

let all = Promise.all([
  new Promise((resolve, reject) => {
    resolve("Dingo");
  })
]).then(() => {
  console.log("loading all promises");
});

all();
