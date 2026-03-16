let [first, second, third] = [10, 20, 30];
console.log(first);
console.log(second);
console.log(third);
// in above case each values will go as the arrays are created
// each value is an array

console.log("--------");

let [first1, second2, ...third3] = [10, 20, 30, 60, 50, 40];
console.log(first1);
console.log(second2);
console.log(third3);// all values starting from 30
