let scores = [45, 82, 91, 60, 73];

// map — transforms every element, returns NEW array

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

// filter — keeps elements that pass a test

let passing = scores.filter(s => s >= 70);
console.log(passing);

// reduce — accumulates to a single value

let total = scores.reduce((sum, s) => sum + s, 0); //351
console.log(total);

let marks = [23, 24, 45, 66, 33, 22];
console.log(marks);
let totalMarks = marks.reduce((mult, d) => mult * d);
// for reduce we have to give the 2 vars
// expression that we want to perform on those
console.log(totalMarks);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());