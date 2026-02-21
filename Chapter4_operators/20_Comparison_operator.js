//=,==,===,!=,!==,>,<,>=,<= 

let b = 10; // this is assignment operator

console.log(b == 10); // this is comparison operator and only compares values not data types
console.log(b == "10");

console.log(b === 10); // this is comparison operator and compares values as well as data types

console.log(b === "10"); // this is comparison operator and compares values as well as data types
console.log("-------------------");

let c = 20;
console.log(b != c); // this is comparison operator and compares values as well as data types

console.log(b !== c); // this is comparison operator and compares values as well as data types

// console.log(b !=== c); this is not allowed in JS

console.log(b == c); // this is comparison operator and compares values as well as data types

console.log("-------------------");

console.log(5 != "5"); //false since loose coupled, doesn't compared data types

console.log(5 !== "5"); //true since strictly coupled, does compare data types

console.log("-------------------");


console.log(b > c); // this is comparison operator 
console.log(b < c); // this is comparison operator

console.log(b >= c); // this is comparison operator 

console.log(b <= c); // this is comparison operator 