const fetch = require("node-fetch");

(function main() {
  console.log("NPM index file");

  //Use Fetch api
  fetch("http://intrepidnomads.com").then(function(response) {
    let body = response.text().then(body => {
      console.log(body);
    });
  });
})();
