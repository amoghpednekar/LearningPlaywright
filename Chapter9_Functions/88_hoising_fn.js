// Hoisting
// Function declarations are hoisted — 
// you can call them before they're defined. 
// Function expressions and arrow functions are NOT.

console.log(hoist("Amogh")); // this will work
function hoist(test) {
    return `My nam is is: ${test}`;
}

//testName("pass"); // this give error 
//ReferenceError: Cannot access 'testName' before initialization
const testName = function testvalues(results) {
    return `This is my result ${results}`;
}
console.log(testName("pass")); // this will work because of hoisting concept