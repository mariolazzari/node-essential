//const event = require("events");
const { EventEmitter } = require("events");
const Person = require("./lib/Person");
//const emitter = new event.EventEmitter();
const emitter = new EventEmitter();

// register
emitter.on("customEvent", (message, status) => {
  console.log(message + ": " + status);
});

// raise
emitter.emit("customEvent", "Hello world", 200);

// inherit event
let mario = new Person("Mario");
mario.on("speak", message => {
  console.log(mario.name + " said:", message);
});

mario.emit("speak", "I raised speak event");
console.log(mario);
