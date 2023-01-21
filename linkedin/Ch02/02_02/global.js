const path = require("path");

console.log(__dirname);
console.log(`The file name is ${path.basename(__filename)}`);

for (const key in global) {
  console.log(key);
}
