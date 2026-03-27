// Extracting Substrings

let str = "Login_Test_Pass_001";
// slice(start, end) — negative indexes supported

console.log(str.slice(0, 6)); //Login_
console.log(str.slice(8)); //get all the value after 8
console.log(str.slice(-4));// get value till -4 from -1

let testNumber = str.slice(-3);
console.log(testNumber);

// substring(start, end) — no negatives (treats as 0)

str.substring(6, 10);// syntax
let strNew = str.substring(6, 10);
console.log(strNew);

console.log(strNew.substring(2)); //shows from 2nd index onwards

console.log(strNew.substring(-2)); // no negatives

// at() - to get single char

console.log(strNew.at(2));

console.log(strNew.at(-3));

