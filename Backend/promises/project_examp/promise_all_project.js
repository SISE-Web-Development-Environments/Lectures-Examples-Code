const express = require("express");
const morgan = require("morgan"); // logging library
const axios = require("axios"); // supports promises
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

const api_domain = "https://api.spoonacular.com/recipes";
const api_key = "apiKey=9dfadfa642a74094836f8a3d38d80db2";

// print request logs
app.use(morgan(":method :url :status  :response-time ms"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET method route and '/' URI
app.get("/search", async function (req, res) {
  try {
    // extract query params
    let number_of_results = req.query.number;
    let query = req.query.query;

    // request spoonacular: Search Recipe
    let search_response = await axios.get(
      `${api_domain}/search?${api_key}&query=${query}&number=${number_of_results}`
    );

    // Extract search results ids
    let recipes = search_response.data.results;
    recipes_id_list = [];
    recipes.map((recipe) => {
      console.log(recipe.title);
      recipes_id_list.push(recipe.id);
    });

    // Get recipes info by id
    let info_array = await getRecipesInfo(recipes_id_list);
    res.send(info_array);
  } catch (e) {
    console.log(e);
  }
});

let getRecipesInfo = async function (recipes_id_list) {
  let promises = [];
  // For each id  -> get promise of GET response
  recipes_id_list.map((id) =>
    promises.push(axios.get(`${api_domain}/${id}/information?${api_key}`))
  );
  let info_response1 = await Promise.all(promises);

  // -------- TODO: show general promiseAll -----------------
  //   let url_list = [];
  //   recipes_id_list.map((id) =>
  //     url_list.push(`${api_domain}/${id}/information?${api_key}`)
  //   );

  //   let info_response2 = await promiseAll(axios.get, url_list);

  //   console.log(info_response1.toString() == info_response2.toString());

  return info_response1.map((res) => res.data);
};

let promiseAll = async function (func, param_list) {
  let promises = [];
  param_list.map((param) => promises.push(func(param)));
  let info_response = await Promise.all(promises);

  return info_response;
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
