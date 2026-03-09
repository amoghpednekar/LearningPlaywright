let myStatus = ["Pass", "Fail", "Error", "Untested"];

//get the value of 2
console.log(myStatus.at(2));

//get the value which is not there
console.log(myStatus.at(4));

// get the value from last
console.log(myStatus.at(-1));

// get the value from last but not present
console.log(myStatus.at(-6));

//lets get the index
console.log(myStatus.indexOf("Fail"));

//lets get the index of the one not present
console.log(myStatus.indexOf("Core")); // should be -1
// -1 in the search means not found

//-----

//lastIndexOf — searches from the end
console.log(myStatus.lastIndexOf("Pass"));

// includes — returns boolean
// true or false
console.log(myStatus.includes("Cake")); // false
console.log(myStatus.includes("Pass")); // true

// find — returns first matching element

let numb = [59, 69, 79, 89, 99, 49];
console.log(numb.find(x => x > 66));
// as it says, it only return first matchinhg element
// it will give value find


// findIndex
console.log(numb.findIndex(x => x > 89));
// this will give index first matched index

//findLast
console.log(numb.findLast(x => x > 66));
// this gives last matched value

//findLastIndex
console.log(numb.findLastIndex(x => x > 55));




