async function myFunction() {
    return "Hello";
}

myFunction().then(
    function(value) {console.log(value);},
    function(error) {console.log(error)}
)