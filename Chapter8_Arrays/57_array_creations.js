// 1. empty array
let store = [];
console.log(store);
// 2. empty quotes array;
let store1 = [""];
console.log(store1);

// 3. Array with some values
let store2 = ["Apple Store", "Chroma", "HushPuppies", "JBL"];
console.log(store2); // should print the array

//4. get the length of array

console.log(store2.length);

// 5. get the index of "Hushpuppies"

console.log(store2.indexOf("HushPuppies"));

// 6. Get the value at index

console.log(store2[3]);

// 7. Try to get the value of the index which is not present

console.log(store2[5]); // undefined always since no array element present

// array can hold multiple data types as well

let multiArray = ["Amogh", 32, true, null]
console.log(multiArray);

// quick exaple in automation for Array

let testResults = ["Pass", "Fail", "Blocked", "Skip", "Untested", "Pass"];
let index;
for (index = 0; index < testResults.length; index++) {
    console.log(testResults[index]);
}

if (testResults[index] === "Pass") {
    console.log("This is a Pass result");
} else if (testResults[index] === "Fail") {
    console.log("This is a Fail result");
} else if (testResults[index] === "Skip") {
    console.log("This is skipped");
} else {
    console.log("It is blocked or Untested");
}







