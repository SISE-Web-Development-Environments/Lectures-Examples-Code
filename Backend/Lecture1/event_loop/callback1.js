var fs = require("fs");



// calling a Synchronous function
let data = fs.readFileSync(`${__dirname}/myFile.txt`, "utf-8"); // BLOCKING CODE
console.log("I'm a sync reader, file data: ", data);

// ============== using an anonymous function

// // calling an Asynchronous function
fs.readFile(`${__dirname}/myFile.txt`, "utf-8", function (err, data) { // NON-BLOCKING CODE
  if (err) throw err;
  console.log("I'm an async reader, this is my callback - file data: ", data)
}); //readFile

// =======================================
// ============== using named function

// // calling an Asynchronous function
fs.readFile(`${__dirname}/myFile.txt`, "utf-8", callback);  // NON-BLOCKING CODE

let callback = function (err, data) {
  if (err) throw err;
  console.log("I'm an async reader, this is my callback - file data: ", data);
}

// =======================================

console.log("I'm the last code line1");
console.log("I'm the last code line2");
console.log("I'm the last code line3");
