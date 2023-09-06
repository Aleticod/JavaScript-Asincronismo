# Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</br>

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a *promise* to supply the value at some point in the future. </br>

A `Promise` is in one of these states:

* ***pending:*** initial state, neither fulfilled nor rejected.
* ***fulfilled:*** meaning that the operation was completed successfully.
* ***rejected:*** meaning that the operation failed.

The *eventual state* of a pending promise can either be *fulfilled* with value or *rejected* with a reason (*error*). When either of these options occur, the associated handlers queued up by a promise's `then` method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.</br>

A promise is said to be *settled* if it is either fulfilled or rejected, but no pending.</br>

## Chained Primises
The methods `Promise.prototype.then()`, `Promise.prototype.catch()` and `Promise.prototype.finally()` are used to associate further action with a prmise that becomes settled. As these methods return promises, they can be chained.</br>

The `.then()` method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second arguments is a callback function for the rejected case. Each `.then()` returns a newly generated promise object, which can optionally be used for chaining.

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo");
        }, 300)
    })

    myPromise
        .then(handleFulfilledA, handleRejectedA)
        .then(handleFulfilledB, handleRejectedB)
        .then(handleFulfilledC, handleRejectedC);

Processing continues to the next link of the chain even when a  `.then()` lacks a callback function that returns a Promise object. Therefore, a chain can safely omit every *rejection* callback function until the final `.catch()`.</br>

Handling a rejected promise in each `.then()` has consequences further down the promise chain. Sometimes there is no choise, because an error must be handled immediately. In such cases we must throw an error of some types to maintain error state down the chain. On the other hand, in the absence of an immediate need, it is simpler to leave out error handling unti a final `.catch()` statement. A `.catch()` is really just a `.then()` without a slot for a callback function for the case when the promise is fulfilled.</br>

    myPromise
        .then(handleFulfilledA)
        .then(handleFulfilledB)
        .then(handleFulfilledC)
        .catch(handleRejectedAny);

Using arrow functions for the callback functions, implementation of the promise chain might look somthing like this.

    myPromise
        .then((value) => `${value} and bar`)
        .then((value) => `${value} and bar again`)
        .then((value) => `${value} and again`)
        .then((value) => `${value} and again`)
        .then((value) => {
            console.log(value);
        })
        .catch((err) => {
            console.log(err);
        })

The termination condition of a promise determinates the "settled" state of the next promise in the chain. A "fulfilled" state indicates a successful completion of the promise, while a "rejected" state indicates a lack of success. The return value of each fulfilled promise in the chain is passed along to the next `.then()`, while the reason for rejection is passed along to the next rejection-handler function in the chain.</br>

## Promise concurrency
The `Promise` class offers four static methods to facilitate async task concurrency.</br>

### Promise.all()
Fulfills when **all** promises fulfill; reject when **any** of the promisis rejects.</br>

### Promise.allSettled()
Fulfills when **all** promises settle.</br>

### Promise.any()
Fulfills when **any** of the promises fulfills; reject when **all** of the promises reject.</br>

### Promise.race()
Settles when **any** of the promises settles, in other words, fulfills when any of the promises fulfills; reject when any of the promises rejects.</br>

## Constructor

### Promise(.)
Creates a new `Promise` object. The constructor is primarily used to wrap functions that do not already suport promises.</br>

### Promise[@@species]
Return the constructor used to construct return values from promise methods.</br>

## Static Methods

- `Promise.all()`
- `Promise.allSettled()`
- `Promise.any()`
- `Promise.race()`

### Promise.reject()
Returns a new `Promise` object that is rejected with the given reason.

### Promise.resolve()
Returns a `Promise` object that is resolved with the given value. If the value in a thenable (i.e. has a `then` method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.</br>

## Instance properties
These properties are defined on `Promise.prototype` and shared by all `Promise` instances.</br>

### Promise.prototype.constructor
The constructor function that created the instance object. For `Promise` instances, the initial value is the `Promise` constructor.

### Promise.prototype[@@toStringTag]
The initial value of the @@toStringTag property is the string `"Promise"`. This property is used in `Object.prototype.toString()`.</br>

## Instance methods

### Promise.prototype.catch()
Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.</br>

### Promise.prototype.finally()
Appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.</br>

### Promise.prototype.then()
Appends fulfilled and rejection handlers to the promise, and returns a new promise resolving to the reutnr value of the called handler, or to its original settled value if the promise was not handled (i.e. the relevant handler `onFulfilled`,or `onRejected` is not a funtion).

___

"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links produciong code and comuning code.

# JavaScript Promise Object
A JavaScript Promise object contains both the producing code and calls to the consuming code.</br>

    let myPromise = new Promise(function (myResolve, myReject) {
        // Producing code (May take some time)

        myResolve(); // when successful
        myReject(); // When error
    });

    // Consuming code (Must wait for a fulfilled Promise)
    myPromise.then(
        function(volue) {/* code is successful */},
        function(error) {/* code if some error */}
    );

When the produccing code obtains the result, it should call one of the two callbacks.

|**Result**|**Call**|
|----------|--------|
|Success   |myResolve(result value)|
|Error     |myReject(error object)|

# Promise Object Properties
A JavaScript Promise object can be:

* Pending
* Fulfilled
* Rejected

The promise object supports two properties: **state** and **result**.</br>
While a Promise object is "pending" (working), the result is undefined.</br>
When a Promise object is "fulfilled", the result is a value.</br>
When a Promise object is "rejected", the result is an error object.</br>

|**myPromise.state**|**myPromise.result**|
|-------------------|--------------------|
|"pending"          |undefined           |
|"fulfilled"        |a result value      |
|"rejected"         |an error object     |

# Promise How To
Here is how to use a Promise:

    myPromise.then(
        function(value) { /* code if successful /*},
        function(error) {/* code if some error */}
    );

