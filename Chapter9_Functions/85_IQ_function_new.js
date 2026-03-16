// Return value
// ex: 1
function startCodeCheck(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Staus ok");
    } else if (statusCode >= 300 && statusCode < 400) {
        console.log("Staus errors");
    } else if (statusCode >= 400 && statusCode < 600) {
        console.log("Big errors");
    } else {
        console.log("Error out of range");

    }
}
startCodeCheck(200);
startCodeCheck(304);
startCodeCheck(505);
startCodeCheck(605);

console.log("-----------check this line breaker-------");

// same code can be retrun with minimal lines:

function startCodeCheck(statusCode) {
    if (statusCode >= 200 && statusCode < 300)
        return console.log("Staus ok");
    if (statusCode >= 300 && statusCode < 400)
        return console.log("Staus errors");
    if (statusCode >= 400 && statusCode < 600)
        return console.log("Big errors");
    else
        return console.log("Error out of range");
}
startCodeCheck(200);
startCodeCheck(304);
startCodeCheck(505);
startCodeCheck(605);

// ex2:
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}
// let result = logTest("Login");
logTest("Login"); // we can call it this way when return statement is there

// ex: 3
greet("Alicss") // this will also give output due to Hoisting concept
//it treats the function to the top
function greet(name) {
    console.log(`Hello, ${name}`);
}
greet("Alicss") // this will also
// Hoisting only works with normal functions 

//does not work with expression or arrow functions

//arrow try:
//greet1("amamd") // fails here due to hoisting is not possible
const greet1 = (name1) => console.log(`Hellow, ${name1}`);
greet1("amamd")

// expression try:
// Sayhi("Amdadoj") // fails here due to hoisting is not possible
const Sayhi = function (name2) {
    console.log(`Hellow, ${name2}`);
}
Sayhi("Amdadoj")