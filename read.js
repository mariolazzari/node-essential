const fs = require("fs");
const path = require("path");

// sync
console.log("Sync");
const file = fs.readFileSync("./README.md", "UTF-8");
console.log(file);

// async
console.log("Async");
fs.readFile("./README.md", "UTF-8", (err, file) => {
  if (err) console.log(err);
  console.log(file);
});
console.log("Async reding..");

// dir content
fs.readdir("./lib", (err, files) => {
  files.forEach(fileName => {
    const file = path.join(__dirname, "lib", fileName);
    const stats = fs.statSync(file);
    if (stats.isFile()) {
      fs.readFile(file, "UTF-8", (err, file) => {
        console.log(file);
      });
    }
  });
});
