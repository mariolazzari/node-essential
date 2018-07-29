// global objext
const path = require("path");

let hello = "Hello world from Node.js";
let justNode = hello.slice(17);

console.log(hello);
console.log(`Rock & roll form ${justNode}`);

console.log(__dirname);
console.log(__filename);

console.log(`Hello from ${path.basename}`);
