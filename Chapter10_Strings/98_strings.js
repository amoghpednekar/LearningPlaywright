// Strings

let url = 'www.appvwo.com';
let name = "Name";
let message = `Message is completed in ${320}ms`

console.log(" " + url + " " + name + " " + message);

//single quotes:

let myName = 'Amogh';

//double quotes:
let fullName = "Pednekar";

console.log(myName + " " + fullName);

// Template literals (backticks) — allows expressions & multiline

let name1 = "Alice";
let expression = `My name is ${name1} and 2+2 = ${2 + 2} `

console.log(expression);

//// Multiline

let report = `
    Status: Pass
    Name: Amogh
    Work status: Working
    Number: 000000001
`;

console.log(report);

// String() constructor (converts other types)

console.log(String(300));

console.log(String(true));

console.log(String(null));

console.log(String([1, 2, "Name", true]));









