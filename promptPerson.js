const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const person = {
  name: "",
  sayings: []
};

rl.question("Enter your name:", answer => {
  person.name = answer;
  rl.setPrompt(person.name + " sayngs:");
  rl.prompt();
  rl.on("line", sayng => {
    rl.setPrompt("What else? (exit to leave)");
    if (sayng.toLowerCase().trim() === "exit") {
      rl.close();
    }

    person.sayings.push(sayng.trim());
  });
});

rl.on("close", () => {
  console.log("%s sayings; %j", person.name, person.sayings);
  process.exit();
});
