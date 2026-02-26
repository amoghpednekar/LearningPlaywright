//Please calcute the output using ERT 

let a = 5;
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;

console.log(b); // value of a at this point was 7
console.log(a); // value of a after "c" calculation is 11+1 = 12
console.log(c); // Value of a start from 7

//ERT - Expression result table
// Line no | Variable | Result
//   7.    | 5 + (5+1+1) | 12
//.  8.    |      11+1   | 12
//  9.    |7 + (7+1+1) + 10 + 11 + 11| 7+9+10+11+11| 48