// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined

let a = 10;
let b = a;
console.log(b);
b = 99; // updated b value only doesn't change the value for a
console.log(a);
console.log(b);
a = 90; // updated a value only doesn't change the value for b
console.log(a);
console.log(b);


console.log("-----")

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function

let obj1 = { val: 10 };
console.log(obj1); // before updating the value of obj2
let obj2 = obj1;
obj2.val = 22;
console.log(obj2);
console.log(obj1);