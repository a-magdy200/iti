const fs = require('fs');
const readline = require('readline');
// Part 1
const eventModule = require('./event-module');
const logger = new eventModule.myLogger();
logger.on("data", data => console.log("testing " + data));
logger.emit("data", "Hello World");


// Part 2
// Create file sync
fs.writeFileSync("test.txt", "Test data");
// Create file async

fs.writeFile("test-async.txt", "test data", (err, data) => {});

// Read file sync
let data = fs.readFileSync("test.txt");
console.log(data.toString());

// Read file async
fs.readFile("test.txt", (err, data) => {
  console.log(data.toString());
});

// Read file line by line
const rl = readline.createInterface({
  input: fs.createReadStream('test.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});

// Task #6
fs.writeFileSync("info.txt", "hello iti");

// BONUS: Task #7
if (!fs.existsSync("test-dir")) {
  fs.mkdirSync("test-dir");
}



fs.appendFileSync("test.txt", " Adding");
data = fs.readFileSync("test.txt");
console.log(data.toString());
