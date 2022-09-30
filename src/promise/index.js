const promise = new Promise(function (resolve, reject){ 
    resolve('Hey, all is correct')
})

// Example
const cows = 10;

const countCows = new Promise(function(resolve, reject) {
    if( cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    }
    else {
        reject("There is no suficients cows on the farm");
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finish the process'));