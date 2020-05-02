const fs = require("fs");

const file_path = `${__dirname}/my_hero.txt`;

// calling an async function
fs.readFile(`${file_path}`, "utf-8", function (err, data) {
  if (err) throw err;
  console.log("I'm callback - file data: ", data);
}); //readFile
