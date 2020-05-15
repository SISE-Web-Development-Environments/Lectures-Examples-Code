const fs = require("fs");
const request = require("request"); //
const opn = require("opn");

const file_path = `${__dirname}/my_hero.txt`;

// API SITE: https://superheroapi.com/
const superhero_api_baseurl = "https://superheroapi.com/api/10219968444535202";

// Read our superhero name from database
fs.readFile(`${file_path}`, "utf-8", function (err, file_data) {
  //#region  Read our superhero name from database
  if (err) throw err;

  let superhero_name = file_data;
  let request_url = `${superhero_api_baseurl}/search/${superhero_name} `;

  // Get the superhero ID from API
  request.get(request_url, function (err, response, body) {
    if (err) throw err;

    // See response body on postman
    let superhero_id = JSON.parse(body).results[0].id;
    // Get the superhero image
    let request_url = `${superhero_api_baseurl}/${superhero_id}/image`;

    // requests are limit to 1 in a second
    setTimeout(function () {
      request.get(
        request_url,
        function (err, response, body) {
          //#region get hero imag
          if (err) throw err;
          // specify the app to open in
          opn(JSON.parse(body).url, { app: "chrome" });
        },
        1000
      );
    });
  });
});
