const fs = require("fs");

if (fs.existsSync("lib")) {
  return console.log("lib directory already exists");
}

fs.mkdir("lib", err => {
  if (err) return console.log(err);

  console("lib directory created");
});
