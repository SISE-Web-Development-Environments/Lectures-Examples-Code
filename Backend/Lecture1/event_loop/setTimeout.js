const start_time = new Date().getSeconds();

const timeOut_ms = 500;
const loop_seconds = 3;


// Since the callback is entering in the Callback-Queue, it will run only after the stack will be empty
console.log(`Starting timeout of ${timeOut_ms}ms`);


setTimeout(function () {
    const seconds_passed = new Date().getSeconds() - start_time
    // prints out "3", meaning that the callback is not called immediately after 500 milliseconds.
    console.log("Ran after " + seconds_passed + " seconds");
}, timeOut_ms);

console.log("Hold on... start looping");


while (true) {
    const seconds_passed = new Date().getSeconds() - start_time
    if (seconds_passed >= loop_seconds) {
        console.log("Good, looped for " + loop_seconds + " seconds");
        break;
    }
}
