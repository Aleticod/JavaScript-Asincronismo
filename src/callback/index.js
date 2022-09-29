/**
 * Call back simple
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function sum(num1, num2) {
    return num1 + num2;
}

function calculate(callback, num1, num2) {
    return callback(num1, num2);
}

console.log(calculate(sum, 5, 6));

/**
 * Callback with setTimeout
 */
setTimeout(() => {
    console.log('Hola JavaScript');
}, 2000);

//
function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 3000, 'Oscar');