const fs = require("fs");
// ++++++++++++++++++++++++++++++++++++++++++++++++
const axios = require("axios"); // supports promises
// ++++++++++++++++++++++++++++++++++++++++++++++++

const opn = require("opn");
const file_path = `${__dirname}/my_hero.txt`;

// API SITE: https://superheroapi.com/
const superhero_api_baseurl = "https://superheroapi.com/api/10219968444535202";

// Read our superhero name from database
let readFilePromise = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${file_path}`, "utf-8", (err, file_data) => {
      if (err) {
        () => {
          reject(err);
        };
      }
      console.log(file_data);
      resolve(file_data);
    });
  });
};

let setTimeoutPromise = (data) => {
  // requests are limit to 1 in a second
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

readFilePromise()
  .then((file_data) => {
    //#region

    console.log("The superhero name is:", file_data);

    let superhero_name = file_data;
    let request_url = `${superhero_api_baseurl}/search/${superhero_name} `;

    // Get the superhero ID from API
    console.log(`GET ${request_url}`);
    //#endregion
    return axios.get(request_url);
  })
  .then((response) => {
    //#region
    console.log("response", response.data);
    if (response.data.response == "error") throw Error(response.data.error);
    // See response body on postman
    let superhero_id = response.data.results[0].id;
    console.log("superhero_id", superhero_id);
    // Get the superhero image
    let request_url = `${superhero_api_baseurl}/${superhero_id}/image`;
    //#endregion
    return setTimeoutPromise(request_url);
  })
  .then((request_url) => {
    console.log(`GET ${request_url}`);
    return axios.get(request_url);
  })
  .then((response) => {
    //#region
    console.log("response:", response.data); // Print the response body
    if (response.data.response == "error") throw Error(response.data.error);
    // specify the app to open in
    opn(response.data.url, { app: "chrome" });
    //   getHeroImage(request_url);
    //#endregion
  })
  .catch((err) => {
    if (err.code) console.log("error message:", err.code);
    else console.log("error message:", err);
  });
