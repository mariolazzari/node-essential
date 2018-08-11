const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__filename));
const uploadDir = path.join(__dirname, "www", "files", "upload");
console.log(uploadDir);
util.log(uploadDir);
util.log(v8.getHeapSpaceStatistics());
