let map1 = new Map();
map1.set("1", "karl");

console.log(map1.get("1"));
console.log(map1.has("1"));

map1.delete("1");
console.log(map1.size);

//Chainging map
console.log(map1.set("1", "karl").get("1"));

//iterating -kvp
for (const entry of map1) {
  console.log(entry);
}

//iterating keys
for (const key of map1.keys()) {
  console.log(key);
}

//iterating values
for (const value of map1.values()) {
  console.log(value);
}

//NOTE map preserves the order of insertion unlike an object.,

let set = new Set();
set.add("karl");
set.add("karl");
console.log(set);

let arr = ["Karl", "Karl", "john"];
let distinct = [...new Set(arr)];
console.log(distinct);
