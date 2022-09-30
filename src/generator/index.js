function* generator () {
    yield 1;
    yield 2;
}

// console.log(generator().next().value);

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);

function* generatorIter(array) {
    for (const element of array) {
        yield element;
    }
}

const iter = generatorIter(['Oscar', 'Omar', 'Ana', 'Luis']);

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
