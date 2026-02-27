let a = 8;
let b = ++a + a++;
let c = ++a + ++a + a + a++ - a++;

console.log(b);
console.log(a);
console.log(c);

// Line no | expression| Result
// 1.      | a = 8 | NA
// 5. | (8+1) + 9 | 18
// 6  | a = 10 |
// 7 | (10+1) + (11+1) + 12 + 12 - (12+1)| 11 + 12 + 12 + 12 - 13 = 34
// 6. | a = 13+1 | = 14

// b = 18
// a = 14
// c = 34


