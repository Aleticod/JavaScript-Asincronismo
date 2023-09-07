# JavaScript Async

"*async and await make promises easier to write*"</br>
**async** makes a function return a Promise</br>
**await** makes a function await for a Promise</br>

## Async Syntax
The keyword `async` before a function makes the function return a promise:

    async function myFunction() {
        return "hello";
    }

Is the same as:

    function myFunction() {
        return Promise.resolve("hello");
    }

Example

    async function myFunction() {
        return "hello";
    }

    myFunction().then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
    )

## Await Syntax
The `await` keyword can only be used inside a `async` function.</br>
The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues.

    let value = await promise;

A basic syntax

    async function myDisplay() {
        let myPromise = new Promise(function(resolve, reject) {
            resolve('I love you!!!');
        })
        console.log(await myPromise);
    }

***Una funcion asincrona es una funcion que sabe que es posible que se use la palabra clave `await` dentro de ella para invocar codigo asincrono***</br>

***La palabra `async` se anade a las funciones para que devuelva una promesa en lugar de un valor directamente***</br>

    const cargarDatos = () => {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const res = await fetch(url);
        const datos = await res.json();
        console.log(datos);
    }

    cargarDatos();

**Se puede manejar los errores con try catch**

    const cargarDatos = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/todos/1";
            const res = awat fetch(url);
            const datos = await res.json();
            console.log(datos);
        } catch(err) {
            console.error(err);
        }
    }

_____

# Async JavaSCript
An `async function` declaration create an `AsyncFunction` object. Each time when an async function is called, it returns a new `Promise` which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.</br>

Async functions can contain zero or more `await` expresions. Await expressions make promise-returning function behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of `async` and `await` enables the use of ordinary `try` / `catch` blocks around asynchronous code.</br>

Async functio always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.</br>

For example, consider the following code:

    async function foo() {
        return 1;
    }

It is similar to

    function foo() {
        return Promise.resolve(1);
    }


The body of an async function can be thought of as being split by zero or more await expressions. Top-level code, up to and including the firts await expression (if there is one), is run synchronously. In this way, an async function without an await expression will run synchronously. If there is an await expression inside the function body, howover, the async function will always complete asynchronously.</br>

Code after each await expression can be thought of as existing in a `.then()` callback. In this way a promise chain is progressively constructed with each reentrant step through the function. The return value forms the final link in the chain.</br>

`async function` declaration behave similar to `function` declaration - they are hoited to the top of their scope and can be called anywhere in their scope, and they can be redeclared only in certain contexts.</br>

If you wish to safely perform other jobs after two or more jobs run concurrently and are complete, you must await a call to `Promise.all()` or `Promise.allSettled()` before that job.</br>
