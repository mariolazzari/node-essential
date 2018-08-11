const fs = require("fs");

// sync
console.log("Sync version");
const files = fs.readdirSync("./lib");
console.log(files);

// async
console.log("Async version");
fs.readdir("./lib", (err, files) => {
  if (err) throw err;
  console.log(files);
});
console.log("Reading files...");
