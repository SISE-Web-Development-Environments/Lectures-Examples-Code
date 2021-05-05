let toResolve;

let myPromise = (toResolve) => {
    return new Promise((res, rej) => {

        if (toResolve)
            res("all good")
        else
            rej("all is not good")

    })
}


// toResolve = true
// // returns a value, the promise returned by then gets resolved with the returned value as its value
// myPromise(toResolve)
//     .then(resolve_val => {
//         console.log("then says: ", resolve_val)
//         return "Hi! What's up?!"
//     }
//     )
//     .then(message => console.log(message))
//     .then(val_undefined => console.log("The resolve handler didn't return anything, therefor I got: ", val_undefined))

// toResolve = true
// // throws an error, the promise returned by then gets rejected with the thrown error as its value
// myPromise(toResolve)
//     .then(resolve_val => {
//         console.log("then says: ", resolve_val)
//         throw new Error("haaaaa")
//     })
//     .catch(reject_val => console.log("catch says: ", reject_val))


// Writing the handler function name only, will run the function with the resolve value as param
toResolve = true
myPromise(toResolve)
    .then(console.log)
