const test = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Asynccc')
            }, 2000)
            : reject(new Error('Error!')); 
    })
}

const asyncCall = async () => {
    const result = await test();
    console.log(result);
    console.log('After await');
}

console.log('Before call async function');
asyncCall();
console.log('After call async function');