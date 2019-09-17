function load(callback) {
  console.log("loading");
  callback(onFinish);
}

function onLoadComplete(callback) {
  console.log("loading complete");
  callback();
}

function onFinish() {
  console.log("finished");
}

load(onLoadComplete);
