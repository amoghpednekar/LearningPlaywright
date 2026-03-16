

let array1 = [1, 2, 3, 5];

//[...spread] method to copy an array to another
let array2 = [...array1] //this is method called spread
console.log(array2);

console.log("1----------");

//slice:
let array3 = array1.slice();
console.log(array3);

console.log("-----2-----");

//array from
//this creates array from another

let array4 = Array.from(array1);
console.log(array4);

console.log("--------3--");

//concat - this combines an array
let array5 = array1.concat();
console.log(array5);

//now lets push new array 

array1.push(99);
console.log(array1); // new value
console.log(array2); // will show old value

// Deep copy (JSON)

let c = array1; //deep copy
console.log(c);
array1.push(92);
console.log(array1);
console.log(array2); // no copy full










