


function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function test_me() {
  var x = await resolveAfter2Seconds(10);
  console.log(x);
  return x * 2;
}
test_me().then(console.log);




