// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    console.log(randomInt);
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value); // Return value = number
    } else {
      reject(`Too large: ${value}`);  // Return string = "Too large: number"
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd }; // Es impar o no -> (numero, true or false)
}

function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", { cause: reason }); // Crear un nuevo error {cuasa: rason del error}
  console.error(err); // Imprimes el error
  throw err; // Lanzas el error
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo; 
    if (value >= THRESHOLD_A - 1) {
      reject(`Still too large: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even"; // Crea un nuevo campo wordEvenOdd = odd or even
      console.log(parityInfo);
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done"));
