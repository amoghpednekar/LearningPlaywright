// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2); // to fixed means fixed to 2 decimals
}

console.log(calculatePassRate(11, 7));

// ❌ Impure — depends on external state

function isPassing(score) {
    return score >= threshold;  // depends on external variable
}
let threshold = 70;
console.log(isPassing(threshold));

threshold = 50;
console.log(isPassing(threshold));

//comparing
function isPassing1(score1 = 22) {
    return score1 >= threshold1;  // depends on external variable
}
let threshold1 = 70;
console.log(isPassing1(threshold1));

let threshold2 = 20;
console.log(isPassing1(threshold2));