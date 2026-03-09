// access

let fruits = ["Banana", "Apple", "Grapes", "Mango"];
console.log(fruits.length);

//access 3rd index
// [] use to get the index in positive indexes
// to start from first
console.log(fruits[3]); // this should return Mango
console.log(fruits[4]); // undefined since no value present

// we can also access the values like this if
// we want to know what value index possess from last
console.log("--------");
// () use to get the value at index by adding negatives
// to start from last
console.log(fruits.at(-2));
console.log(fruits.at(-4));
console.log(fruits.at(-9));

//Modify the array values

let statuse = ["Pass", "Fail", "Blocked"];
// I need to change blocked to untested
let count = statuse.length;
console.log(count); // count is 3, so index [0,1,2]
//change the value of blocked
console.log(statuse); // old array
statuse[2] = "Untested";
console.log(statuse); // updated array






