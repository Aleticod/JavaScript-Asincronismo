function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise((resolve, reject) => {
    let x = 1;
    // The produccing code (this may take some time)

    if (x === 0) {
        resolve("OK");
    } else {
        reject("Error");
    }
});

myPromise.then(
    function(value) { myDisplayer(value);},
    function(error) {
        myDisplayer(error);
    }
);