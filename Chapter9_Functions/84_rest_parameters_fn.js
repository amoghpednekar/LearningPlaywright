//Rest parameter

function logResults(suiteName, ...results) {
    console.log(`Suite: ${suiteName}`);
    console.log(`Results: ${results.join(",")}`);
}

logResults("Login", "pass", "fail", "fail", "pass", "blocked");


function add(a, b, c) {
    return a + b + c;
}
let sum = add(12, 22, 32);
console.log(sum);
