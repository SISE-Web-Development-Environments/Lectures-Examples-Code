const throw_error = false

const pr = new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
})

pr
    .then(() => {

        if (throw_error)
            throw new Error('Something failed')
        else
            console.log('Do this');
    })
    .catch((e) => {
        console.error(e.message);
    })
    .then(() => {
        console.log('Do this, no matter what happened before');
    });




