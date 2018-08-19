const fs = require("fs");

fs.renameSync("./lib/project.conf", "./lib/project2.conf");
console.log("File renamed");

// async version
fs.rename("./lib/readme.md", "readme.md", err => {
  if (err) {
    console.log("Error renaiming file:", err.message);
  }
});
