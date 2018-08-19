const fs = require("fs");

try {
  fs.unlinkSync("sample.md");
} catch (error) {
  console.log(error);
}

// async version
fs.unlink("readme.txt", err => {
  if (err) return console.log(err);
  console.log("File deleted async");
});
