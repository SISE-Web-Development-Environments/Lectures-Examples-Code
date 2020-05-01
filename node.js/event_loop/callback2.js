var fs = require("fs");

// calling an async function
fs.writeFile("mynewfile.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("I'm callback1 - file saved!");

  // Calling a second async function
  fs.readFile("mynewfile.txt", "utf-8", function (err, data) {
    if (err) throw err;
    console.log("I'm callback2 - file data: ", data);
  }); //readFile

  console.log("non callback print - 2");
}); // writeFile

console.log("non callback print");

