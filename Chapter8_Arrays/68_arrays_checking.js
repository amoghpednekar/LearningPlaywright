// Checking Arrays

// Check if something IS an array
// this only give true and false

let results = Array.isArray();
console.log(results);

let results1 = Array.isArray(["abc", 123, true, 44.44]);
console.log(results1);

let noArray = 23;
let results2 = Array.isArray(noArray);
console.log(results2);


/// using every and some:

//every:
let results4 = [89, 67, 33, 22].every(s => s >= 20);
console.log(results4);

let results5 = [90, 91, 95, 99, 96].every(s => s >= 95);
console.log(results5);

//some:

let results6 = ["adp", 88, 89, true].some(s => s >= 86);
console.log(results6);

let results7 = ["pda", 2, 3, 5, 10].some(d => d < 2);
console.log(results7);



