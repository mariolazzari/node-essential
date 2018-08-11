// Timers
const waitTime = 3000;
let currentTime = 0;
const waitInterval = 500;
let percWaited = 0;

//console.log("Waiting for " + waitTime + " milliseconds");

const writeWaitingPerc = p => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  //process.stdout.write("Waiting " + currentTime / 1000 + " seconds");
  process.stdout.write("Waiting " + percWaited + "%");
};

setTimeout(() => {
  writeWaitingPerc(100);
  clearInterval(interval);
  console.log("End timeout");
}, waitTime);

const interval = setInterval(() => {
  currentTime += waitInterval;
  percWaited += Math.floor((currentTime / waitTime) * 100);
  writeWaitingPerc(percWaited);
  //console.log("Waiting for " + currentTime);
}, waitInterval);

writeWaitingPerc(percWaited);
