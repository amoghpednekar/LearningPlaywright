// Searching & Checking

let url = "https://medium.com/@swati.developer17/part-14-closure-js-interview-exercise-3759e1a73d89";

// includes()

console.log(url.includes("swati")); //true
console.log(url.includes("httpss")); // false

// startsWith / endsWith

console.log(url.startsWith("https"));//true

console.log(url.startsWith("http://"));//false

//endswith

console.log(url.endsWith("d89")); // true

console.log(url.endsWith(" ")); // space - false

// indexOf / lastIndexOf

console.log(url.indexOf("i")); // first index of i

console.log(url.lastIndexOf("i")); // last index of i

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex. 

console.log(url.search("/@swati")); //first index of search is shown

console.log(url.search(/\d+/));

// - 
// /.../: The forward slashes define the start and end of the regular expression.
// \d: This is a metacharacter that stands for "digit" (any number from 0 to 9).
// +: This is a quantifier that means "one or more times".
// Together, \d+ tells the code to look for the first continuous sequence of numbers.





