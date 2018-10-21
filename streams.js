// streams
const fs = require("fs");

// read file
fs.readFile("./logs/chatlog", "UTF-8", (err, chatlog) => {
  if (err) {
    console.log("Error reading file", err);
  } else {
    console.log(`File read: ${chatlog.length}`);
  }
});

// readable stream
const stream = fs.createReadStream("./logs/chat.log", "UTF-8");
// data read
let data = "";
// subscribe events
stream.once("data", () => {
  console.log("\n\n\nStart reading file\n\n\n");
});

stream.on("data", chunk => {
  process.stdout.write(`chunk: ${chunk.length} |`);
  data += chunk;
});

stream.on("end", () => {
  console.log("\n\n\n");
  console.log(`Finish readind file: ${data.length}`);
});
