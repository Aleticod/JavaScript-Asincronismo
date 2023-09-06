async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve('I love you!!!');
    })
    console.log(await myPromise);
}

myDisplay();