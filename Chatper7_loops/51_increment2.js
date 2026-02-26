//let do example of pre and post more
// Post Incre 1:
let k = 12;
k = k++;
console.log(k);
console.log(k);
// in this case value will be same since it is post increment
// it assigns value first then increments
//ERT - Expression result table
// Line no | Variable | Result
// 3 | 12 | NA
// 4 | 12 | 12
// 5 |12 | 12
// 6 |12|12

// Post Incre 2:

let m = 90;
n = m++;
m = m++;
console.log(n);
console.log(m);

//ERT - Expression result table
// Line no | Variable | Result
// 18 | 90 | NA
// 19 | 90 | NA
// 20 | 91 | NA
// 21 | 90| 90
// 22 | 91| 91

//Pre increment1:

let k1 = 12;
k1 = ++k;
console.log(k);
console.log(k);

//ERT - Expression result table
// Line no | Variable | Result
// 34 | 12 | NA
// 35 | 13 | NA
// 36 | 13 | 13
// 37 | 13 | 13

//Pre increment2:

let m1 = 90;
n1 = ++m1;
m1 = ++m1;
console.log(n1);
console.log(m1);

//ERT - Expression result table
// Line no | Variable | Result
// 48 | 90 | NA
// 49 | 91 | NA
// 50 | 92 | 92
// 51 | 91 | 91
// 51 | 92 | 92

//few more ex:

let km = 10;
console.log(km++ + km);

//ERT - Expression result table
// Line no | Variable | Result
// 64 | 10 | NA
// 65 | 21 | NA
// expression (KM++ + KM) = (10 + 11)

let jl = 89;
console.log(jl + jl++);

//ERT - Expression result table
// Line no | Variable | Result
// 73 | 89 | NA
// 74 | 178 | NA
// expression (jl + jl++) = (89 + 89)

let ko = 78;
console.log(++ko + ko++);

//ERT - Expression result table
// Line no | Variable | Result
// 82 | 78 | NA
// 83 | 158 | NA
// expression (++ko + ko++) = (79 + 79)

// Lets check for decrements:

//pre:
let op = 7;
op = --op;
console.log(op);

//ERT - Expression result table
// Line no | Variable | Result
// 93 | 7 | NA
// 94 | 6 | NA
// 95 |  6 | NA

//post
let op1 = 7;
op1 = op1--;
console.log(op1);

//ERT - Expression result table
// Line no | Variable | Result
// 104 | 7 | NA
// 105 | 7 | NA
// 106 |  7 | NA

//math

let yu = 12;
console.log(--yu - yu);

//ERT - Expression result table
// Line no | Variable | Result
// 117 | 12 | NA
// 118 | 0 | NA
// expression (--yu - yu) = (11 - 11)

//math 2

let marks = 100;
let marks2 = --marks;
console.log(marks2);
console.log(marks);

//ERT - Expression result table
// Line no | Variable | Result
// 128 | 100 | NA
// 129 | 99 | NA
// 130 | 99 | 99
// 131 | 99 | 99


//plus and minus together

let be = 10;
console.log(--be + ++be - be++ + --be);

//ERT - Expression result table
// Line no | Variable | Result
// 143 | 10 | NA
// 144 | 17 | 
// expression (--be + ++be - be++ + --be) = {(10-1)+(10-1+1)-(10)+(10+1-1)}
// (9 + 10 - 10 + 10)





