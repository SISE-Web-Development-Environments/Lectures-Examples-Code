var fs = require("fs");

// calling a sync function
let data = fs.readFileSync("myFile.txt", "utf-8");
console.log("I'm sync reader, file data: ", data);

// calling an async function
fs.readFile("myFile.txt", "utf-8", function(err, data) {
  if (err) throw err;
  console.log("I'm callback - file data: ", data);
}); //readFile

console.log("I'm the last code line");
