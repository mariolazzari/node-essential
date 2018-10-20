const fs = require("fs");

if (fs.existsSync("lib")) {
  console.log("lib directory already exists");
}

fs.mkdir("lib", err => {
  if (err) {
    console.log(err);
  } else {
    console("lib directory created");
  }
});

// create log directory if not exists
if (!fs.existsSync("/log")) {
  fs.mkdir("log", err => {
    if (err) console.log(err);
    fs.renameSync("log", "logs");
  });
}

// remove dir asynx
fs.rmdir("notPresent", err => {
  console.log("Error while removign dir", err);
});
