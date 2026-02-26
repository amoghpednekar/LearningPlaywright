//Please calcute the output using ERT 

let a = 5;
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;

console.log(b);
console.log(a);
console.log(c);

//ERT - Expression result table
// Line no | Variable | Result
//   7.    | 5 + (5+1+1) | 12
//.  8.    |      11+1   | 12
//  9.  | 7 + (7+1+1) + 10 + 11 + 11| 7+9+10+11+11| 48