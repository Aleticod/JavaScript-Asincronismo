# Generator
The `Generator` object is returned by `generator function` and it conforms to both the `iterable protocol` and the `iterator protocol`.</br>

`Generator` is a subclass of the hidden `Iterator` class.</br>

## Try it

    const foo = functio* () {
        yield 'a';
        yield 'b';
        yield 'c';
    };

    let str = '';
    for (const val of foo()) {
        str = str + val;
    }

    console.log(str);
    // Expected output: "abc"

## Constructor
The `Generator` contructor is not available globally. Instances of `Generator` must be returned from `generator functions`:

    function* generator() {
        yield 1;
        yield 2;
        yield 3;
    }

    const gen = generator(); // "Generator { }

    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    console.log(gen.next().value); // 3

## Instance methods
Also inherits instance methods from its parent `Iterator`.</br>

`Generator.prototype.next()`</br>
Returns a value yielded by the `yield` expression.</br>

`Generator.protype.return()`</br>
Acts as if a `return` statement is inserted in the generator's body at the current suspended position, which finishes the generator and allows the generator to perform any cleanup tasks when combined with a `try ... finally` block.</br>

`Generator.prototype.throw()`</br>
Acts as if a `throw` statement is inserted in the generator's body ant the current suspended position, which informs the generator of an error condition and allows it to handle error, or perform cleanup and close itself.</br>

With a generator function, values are not evaluated until they are needed. Therefore a generator allows us to define a potencially infinite data structure.

    function* infinite() {
        let index = 0;
        
        while(true) {
            yield index++;
        }
    }

    const generator = infinite(); // "Generator { }"

    console.log(generator.next().value); //0
    console.log(generator.next().value); // 0
    // ....