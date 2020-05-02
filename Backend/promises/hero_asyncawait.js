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

async function showMeMyHero() {
  const file_data = await readFilePromise();
  //#region
  console.log("The superhero name is:", file_data);
  let superhero_name = file_data;
  let request_url_id = `${superhero_api_baseurl}/search/${superhero_name} `;
  // Get the superhero ID from API
  console.log(`GET ${request_url_id}`);
  //#endregion
  const response_id = await axios.get(request_url_id);
  //#region
  console.log("response", response_id.data);
  if (response_id.data.response == "error") throw Error(response_id.data.error);
  // See response body on postman
  let superhero_id = response_id.data.results[0].id;
  console.log("superhero_id", superhero_id);
  // Get the superhero image
  let request_url_image = `${superhero_api_baseurl}/${superhero_id}/image`;
  //#endregion
  await setTimeoutPromise();
  console.log(`GET ${request_url_image}`);
  const response_image = await axios.get(request_url_image);
  //#region
  console.log("response:", response_image.data); // Print the response body
  if (response_image.data.response == "error")
    throw Error(response_image.data.error);
  // specify the app to open in
  opn(response_image.data.url, { app: "chrome" });
  //   getHeroImage(request_url);
  //#endregion
}

showMeMyHero().catch((err) => {
  if (err.code) console.log("error message:", err.code);
  else console.log("error message:", err);
});
