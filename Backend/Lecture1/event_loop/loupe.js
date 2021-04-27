while (queue.waitForMessage()) {
  queue.processNextMessage();
}

$.on("button", "click", function onClick() {
  setTimeout(function timer() {
    console.log("You clicked the button!");
  }, 5000);
});

// $.on('p', 'mouseover', function onHover() {
//     // setTimeout(function timer() {
//     //     console.log('You clicked the button!');
//     // }, 5000);
//     console.log("hover")
// });

// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 2000);

// console.log("Welcome to loupe.");

/* <button>Click me</button>
<p> Hover me </p> */
