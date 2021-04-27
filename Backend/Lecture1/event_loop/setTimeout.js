const start_time = new Date().getSeconds();

const loop_seconds = 3;

setTimeout(function () {
    const seconds_passed = new Date().getSeconds() - start_time
    // prints out "3", meaning that the callback is not called immediately after 500 milliseconds.
    console.log("Ran after " + seconds_passed + " seconds");
}, 500);

console.log("Hold on... start looping");
while (true) {
    const seconds_passed = new Date().getSeconds() - start_time
    if (seconds_passed >= loop_seconds) {
        console.log("Good, looped for " + loop_seconds + " seconds");
        break;
    }
}
