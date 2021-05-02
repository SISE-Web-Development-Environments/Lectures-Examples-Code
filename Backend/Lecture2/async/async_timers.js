timeoutPromise = function (ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

async function timeTest1() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);

  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}

async function timeTest2() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;

  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}

const s = new Date().getSeconds();

timeTest2();
