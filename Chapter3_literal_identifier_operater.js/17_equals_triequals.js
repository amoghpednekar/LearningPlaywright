//difference between == and ===

//example 1: values are different

let a = 98;
let b = 96;
// == is used for comparison of values
// === is used for comparison of values and types
// in below case values are different hence the result is false
console.log(a == b);
console.log(a === b);


//example 2: values are same but types are different
let c = 98;
let d = "98";
// in below case values are same but types are different so == is true and === is false
//this will be true
console.log(c == d);
//this will be false    
console.log(c === d);


//example 3: values are different and types are different
let e = 98;
let f = "96";
// in below case values are different and types are different so == is false and === is false
//this will be false
console.log(e == f);
//this will be false    
console.log(e === f);

//example 4: values are same and types are same
let g = 98;
let h = 98;
// in below case values are same and types are same so == is true and === is true
//this will be true
console.log(g == h);
//this will be true    
console.log(g === h);

//can NaN == NaN be true?
let i = NaN;
let j = NaN;
console.log(i == j); //false
console.log(i === j); //false

//can null == undefined be true?
let k = null;
let l = undefined;
console.log(k == l); //true for loosely coupled
console.log(k === l); //false for strictly coupled

//can null == null be true?
let m = null;
let n = null;
console.log(m == n); //true for loosely coupled
console.log(m === n); //true for strictly coupled

//can undefined == undefined be true?
let o = undefined;
let p = undefined;
console.log(o == p); //true for loosely coupled
console.log(o === p); //true for strictly coupled
