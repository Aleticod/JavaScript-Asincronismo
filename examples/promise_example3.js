// Using Callback
setTimeout(() => {
    myFunction("I love you!!!");
}, 3000);

function myFunction(value){
    console.log(value);
}

// Using Promise
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve("I love you!!!")
    }, 3000)
});

myPromise.then(function(value) {
    console.log(value);
});