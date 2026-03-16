let results = ["pass", "fail", "pass"];
let counts = results.reduce((acc, r) => {
    acc[r] = (acc[r] || 0) + 1;
    return acc;
}, {});
console.log(counts.pass);

// This code counts the number of times each word (like "pass" and "fail") appears in the results array using JavaScript's .reduce() method.

// Here's a step-by-step breakdown of how it works:

// 1. The Array (line 1)

// javascript
// let results = ["pass", "fail", "pass"];
// This is your starting array containing three strings.

// 2. The .reduce() Method (lines 2-5)

// javascript
// let counts = results.reduce((acc, r) => {
//     acc[r] = (acc[r] || 0) + 1;
//     return acc;
// }, {});
// The .reduce() method processes the array element by element, gradually building up a single final value (in this case, an object).

// {} at the very end (on line 5) is the initial value of acc (the accumulator). It starts as an empty object.
// acc: Short for accumulator. It's the object we are building up.
// r: Represents the current string from the array being processed ("pass", then "fail", then "pass").
// How the loop runs:

// Iteration 1: r is "pass"
// acc is {}
// acc["pass"] doesn't exist yet, so (acc["pass"] || 0) evaluates to 0.
// We add 1 to it: 0 + 1 = 1.
// acc becomes { pass: 1 }.
// Iteration 2: r is "fail"
// acc is { pass: 1 }
// acc["fail"] doesn't exist yet, so it defaults to 0.
// We add 1 to it: 0 + 1 = 1.
// acc becomes { pass: 1, fail: 1 }.
// Iteration 3: r is "pass"
// acc is { pass: 1, fail: 1 }
// acc["pass"] already exists and its value is 1.
// We add 1 to it: 1 + 1 = 2.
// acc becomes { pass: 2, fail: 1 }.
// 3. The Output (line 6)

// javascript
// console.log(counts.pass);
// After the .reduce() finishes, counts is exactly { pass: 2, fail: 1 }. By requesting counts.pass, it logs the value 2 to the console.