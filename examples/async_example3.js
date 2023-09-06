import { XMLHttpRequest } from "xmlhttprequest";

async function getFile() {
    let myPromise = new Promise(function(resolve) {
        let req = new XMLHttpRequest();
        req.open('GET', "https://asdfasdfasdf.com")
        req.onload = function() {
            if(req.status == 200) {
                resolve(req.response);
            } else {
                resolve('File no found');
            }
        }
        req.send();
    })
    console.log(await myPromise);
}

getFile()