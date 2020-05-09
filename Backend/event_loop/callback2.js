var fs = require("fs");

// calling an async function
fs.writeFile(`${__dirname}/mynewfile.txt`, "Hello content!", function (err) {
  if (err) throw err;
  console.log("I'm callback1 - file saved!"); //1

  // Calling a second async function
  fs.readFile(`${__dirname}/mynewfile.txt`, "utf-8", function (err, data) {
    if (err) throw err;
    console.log("I'm callback2 - file data: ", data); //2
  }); //readFile

  console.log("non callback print - 2"); //3
}); // writeFile

console.log("non callback print"); //4
