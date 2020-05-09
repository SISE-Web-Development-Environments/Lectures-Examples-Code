var fs = require("fs");

// calling a sync function
let data = fs.readFileSync(`${__dirname}/myFile.txt`, "utf-8");
console.log("I'm sync reader, file data: ", data); //1

// calling an async function
fs.readFile(`${__dirname}/myFile.txt`, "utf-8", function (err, data) {
  if (err) throw err;
  console.log("I'm callback - file data: ", data); //2
}); //readFile

console.log("I'm the last code line1"); //3
console.log("I'm the last code line2"); //4
console.log("I'm the last code line3"); //5
