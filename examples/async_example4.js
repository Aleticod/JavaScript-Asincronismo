async function myAsyncFunction () {
    let myPromise = new Promise(function (resolve, reject) {
        var x = 11;
        if (x < 10) {
            resolve("Menor a 10")
        } else {
            resolve("Mayor o igual a 10")
        }
    })

    var response = await myPromise;
    console.log(response);
    response = await myPromise;
    console.log(response);
}

myAsyncFunction();