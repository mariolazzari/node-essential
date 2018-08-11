const { exec } = require("child_process");

//exec("chrome http://www.mariolazzari.it");
exec("dir", (err, stdout) => {
  if (err) throw err;

  console.log("dir command:");
  console.log(stdout);
});
