const axios = require("axios"); // supports promises

const api_domain = "https://api.spoonacular.com/recipes";
const api_key = "apiKey=9dfadfa642a74094836f8a3d38d80db2";

async function getRecipesInfo(recipes_id_list) {
  let promises = [];

  // For each id  -> get promise of GET response
  recipes_id_list.map((id) =>
    promises.push(axios.get(`${api_domain}/${id}/information?${api_key}`))
  );
  let info_response1 = await Promise.all(promises);

  //#region  -------- TODO: try general promiseAll -----------------
  // let url_list = [];
  // recipes_id_list.map((id) =>
  //   url_list.push(`${api_domain}/${id}/information?${api_key}`)
  // );

  // let info_response2 = await promiseAll(axios.get, url_list);

  // console.log(info_response1.toString() == info_response2.toString());
  //#endregion

  relevantRecipesData = extractRelevantRecipeData(info_response1);
  return relevantRecipesData;
}

function extractRelevantRecipeData(recipes_Info) {
  return recipes_Info.map((recipe_info) => {
    const {
      id,
      title,
      readyInMinutes,
      aggregateLikes,
      vegetarian,
      vegan,
      glutenFree,
      image,
    } = recipe_info.data;

    return {
      id: id,
      title: title,
      readyInMinutes: readyInMinutes,
      aggregateLikes: aggregateLikes,
      vegetarian: vegetarian,
      vegan: vegan,
      glutenFree: glutenFree,
      image: image,
    };
  });
}

// General promiseAll implementation
let promiseAll = async function (func, param_list) {
  let promises = [];
  param_list.map((param) => promises.push(func(param)));
  let info_response = await Promise.all(promises);

  return info_response;
};

getRecipesInfo([492560, 559251, 630293]).then(console.log);
