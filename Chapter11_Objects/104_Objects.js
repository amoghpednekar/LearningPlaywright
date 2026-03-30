// Objects
// Key and value

let firstObject = { name: "Amogh", age: 33, married: true } //key values are not stored in "double quotes"
console.log(firstObject);
console.log(firstObject.name); // accessing values for a key inside an object
console.log(firstObject["age"]); // accessing values for a key inside an object


// ----
let firstJson = { "name": "Amogh", "age": 32, "married": true } //JSON key value pair

// keys are case sensitive.

let results = { status: "pass", Status: "fail" };
console.log(results.status); //should display pass
console.log(results["Status"]); // should display fail

// see if we can copy an object

let secondObject = firstObject; // b copies the REFERENCE, not the object
console.log(secondObject);
secondObject.married = false;
console.log(firstObject.married);// should show false
console.log(firstObject); // value for married is updated as well

// Two separate objects — different memory

let results1 = { status: "pass", Status: "fail" };
let results2 = { status: "pass", Status: "fail" };
console.log(results1 === results2); // false

// we can also write objects like this:

let objJsn = {
    namee: "Amogh Pednekar",
    age: 33.3,
    married: true,
    add: " ",
    pin: " ",
    state: "Maharashtra",
    city: "Mumbai"
}
console.log(objJsn);






