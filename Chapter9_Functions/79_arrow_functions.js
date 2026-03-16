// Arrow Function (ES6)

// tradtional way:

function greetMe(name) {
    return `Hellow, ${name}`;
}
let geetMe = greetMe("Aod");
console.log(geetMe);


// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// let try to convert above to arrow
// add it to variable, remove function and name, remore curly brakets, remove retun keyword
const greet = (name1) => `hello, ${name1}`;
console.log(greet("Amogh"));


// arrow functions only generally works whenever you have a single line. 

const doubleIt = n => n * 2;
console.log(doubleIt(10));


// No params required

const env = () => "Staging";
console.log(env());


// Suppose we have a multi-line. Can we use arrow function everywhere? 
// Multi-line — needs curly braces + return
const getResult = (score) => {
    if (score >= 70) return "Pass";
    return "Fail";
};
console.log(getResult(88));

const multipleline = (namebyname) => {
    return `Hellow, ${namebyname}`;
}

console.log(multipleline("Amogh"));

