const fs = require("fs");
const request = require("request"); //
const opn = require("opn");

const file_path = "./my_hero.txt";

// API SITE: https://superheroapi.com/
const superhero_api_baseurl = "https://superheroapi.com/api/10219968444535202";





// Read our superhero name from database
fs.readFile(`${file_path}`, "utf-8", function(err, file_data) {
  //#region  Read our superhero name from database
  if (err) throw err;
  console.log("The superhero name is:", file_data);

  let superhero_name = file_data;
  let request_url = `${superhero_api_baseurl}/search/${superhero_name} `;

  // Get the superhero ID from API
  console.log(`GET ${request_url}`);
  //#endregion
  request.get(request_url, function(err, response, body) {
    //#region get hero id
    if (err) throw err;

    // See response body on postman
    let superhero_id = JSON.parse(body).results[0].id;
    console.log("superhero_id", superhero_id);
    // Get the superhero image
    let request_url = `${superhero_api_baseurl}/${superhero_id}/image`;

    
    // requests are limit to 1 in a second
    //#endregion
    setTimeout(function() {
      //#region 
      console.log(`GET ${request_url}`);
      //#endregion
      request.get(request_url, function(err, response, body) {
          //#region get hero imag
          if (err) throw err;

          console.log("body:", body); // Print the response body
          // specify the app to open in
          opn(JSON.parse(body).url, { app: "chrome" });
          //   getHeroImage(request_url);
          //#endregion
        },
        1000
      );
    });
  });
});

