const successful_interview = false;

// Promise
const willIGetAccepted = new Promise((resolve, reject) => {
  if (successful_interview) {
    const proposal = { Salary: 30000, "10bis_budget": 50 };
    resolve(proposal);
  } else {
    const reason = new Error("We have decided to continue with other nominees");
    reject(reason);
  }
});

const signContract = function (proposal) {
  return new Promise((resolve, reject) => {
    const signing = `I accept the proposal of monthly salary of ${proposal.Salary} and a daily 10bis budget of: ${proposal["10bis_budget"]} `;
    resolve(signing);
  });
};

//---- shorter writing
// const signContract = function(proposal) {
//     const signing = `I accept the proposal of monthly salary of ${proposal.Salary} and a daily 10bis budget of: ${proposal["10bis_budget"]} `;
//     return Promise.resolve(signing);
//   };

// call our promise
const goToInterview = async function () {
  const answer = await willIGetAccepted;
  const fulfilled = await signContract(answer);
  console.log(fulfilled);
};

goToInterview().catch((error) => console.log(error.message));
console.log("HHHAAA I'm nervous!!!");
