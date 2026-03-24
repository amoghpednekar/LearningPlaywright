function status(code) {
    if (code >= 200 && code < 300) return "Success codes";
    if (code >= 300 && code < 400) return "error codes1";
    if (code >= 400 && code < 500) return "error codes2";
    if (code >= 500 && code < 600) return "server errors codes";
}
console.log(status(200));
console.log(status(300));
console.log(status(404));
console.log(status(600)); // undefined

// Returns nothing → undefined

function nothing(name) {
    console.log(`My name is: ${name}`); // no return statement
}
nothing("Jio");

//return multiple values:

function array() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
console.log(array()); // this will return array