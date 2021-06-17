var fs = require("fs");


// ============== Calling a Synchronous function

// let data = fs.readFileSync(`${__dirname}/myFile.txt`, "utf-8"); // BLOCKING CODE
// console.log("I'm a sync reader, file data: ", data);

// ============== Calling a Asynchronous function

// ================== Callback using an anonymous function

// fs.readFile(`${__dirname}/myFile.txt`, "utf-8", function (err, data) { // NON-BLOCKING CODE
//   if (err) throw err;
//   console.log("I'm an async reader, this is my callback - file data: ", data)
// }); //readFile

// ================== Callback using named function

let callback = function (err, data) {
    if (err) throw err;
    console.log("I'm an async reader, this is my callback - file data: ", data);
}

fs.readFile(`${__dirname}/myFile.txt`);  // NON-BLOCKING CODE
// =======================================

console.log("I'm the last code line1");
console.log("I'm the last code line2");
console.log("I'm the last code line3");
