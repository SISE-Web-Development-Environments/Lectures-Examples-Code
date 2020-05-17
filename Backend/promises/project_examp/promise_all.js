// A simple promise that resolves after a given time
const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t === 2000) {
        reject(`Rejected in ${t}`);
      } else {
        resolve(`Completed in ${t}`);
      }
    }, t);
  });
};

const durations = [1000, 2001, 3000];

async function callAll() {
  const promises = [];

  durations.map((duration) => {
    promises.push(timeOut(duration));
  });

  // We are passing an array of pending promises to Promise.all
  let response = await Promise.all(promises);
  console.log(response);
}

// #region --------------- General format
// async function callAll(func, func_params) {
//     const promises = [];

//     func_params.map((param) => {
//       promises.push(func(param));
//     });

//     // We are passing an array of pending promises to Promise.all
//     let response = await Promise.all(promises);
//     console.log(response);
//   }
// #endregion

//#region  -------------- without calling another function
// (async () => {
//   const promises = [];

//   durations.map((duration) => {
//     promises.push(timeOut(duration));
//   });

//   // We are passing an array of pending promises to Promise.all
//   let response = await Promise.all(promises);
//   console.log(response);
// })().catch((error) => console.log(`Error in executing ${error}`)); // Promise.all throws an error.;

//#endregion shorter

callAll().catch((error) => console.log(`Error in executing ${error}`));
