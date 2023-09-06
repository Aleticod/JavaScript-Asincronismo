let myPromise = new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
        if (req.status == 200) {
            resolve(req.response);
        } else {
            reject("file not Found");
        }
    }
    req.send();
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);