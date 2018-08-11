// Standard I/O
process.stdout.write("Hello ");
// no new lines handled
process.stdout.write("world" + "\n\n\n");

const questions = ["question 1", "question 2", "question 3"];
const answers = [];

const ask = i => {
  process.stdout.write(questions[i]);
  process.stdout.write(" > ");
};

// create event on data input
process.stdin.on("data", data => {
  //process.stdout.write("\n" + data.toString().trim() + "\n");
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

ask(0);

// event listener on exit
process.on("exit", () => {
  console.log(answers);
});
