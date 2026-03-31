const details = { name: "Amogh", age: 33, married: true }
console.log(details);

// Basic destructuring

const { name, age } = details; // cleaner version of const name = details.name; const age = details.age;

console.log(name);
console.log(age);

// Rename variables:
const { name: UserName, age: UserAge } = details; // updated key's name
console.log(UserName);
console.log(UserAge);

//default values:
const { country = "INDIA" } = details;
console.log(country);

// adding object in another object: nested object destructuring.
const data = { user: { name1: "Amogh", address: { city: "Mumbai" } } };
const { user: { address: { city } } } = data;
console.log(city);

//The line const { user: { address: { city } } } = data; uses a JavaScript feature called nested object destructuring.

// Here is a step-by-step explanation of what it does:

// data Object: You have an object named data that contains a nested structure: data > user > address > city.
// Destructuring Syntax: Instead of accessing the property using dot notation like const city = data.user.address.city;, destructuring allows you to "unpack" properties from objects and assign them to distinct variables in a single, more readable line.
// The Extraction: The syntax { user: { address: { city } } } tells JavaScript:
// Go into the data object.
// Look for the user property.
// Inside user, look for the address property.
// Inside address, extract the value of the city property.
// Variable Creation: It then creates a new constant variable named city and assigns it the extracted value ("Mumbai").
// So, when console.log(city); runs, it will print Mumbai to the console.

// Note: This specific syntax only creates a variable for the innermost property (city). It does not create variables for user or address.


