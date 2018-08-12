const fs = require("fs");

const md = `
Sample markdown title
=====================

Sample subtile
--------------

* Point
* Point
* Point

`;

fs.writeFile("sample.md", md, err => {
  if (err) console.log(err);

  console.log("File created");
});

fs.writeFileSync("append.md", md, err => {
  if (err) console.log(err);

  console.log("appended.md file created");
});

fs.appendFileSync("sample.md", md, err => {
  if (err) console.log(err);

  console.log("File appended");
});
