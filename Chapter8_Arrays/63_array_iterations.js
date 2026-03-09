// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
// this will iterate through each items from array
// print each item each line

console.log("----");

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test) // value
}
// test stores the values of tests var
// this will iterate through each items from array
// print each item each line
console.log("----");

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});
// this will iterate through each items from array
// print each item each line with index
console.log("----");

// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("----");
//shows index + value
let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}
// shows only index
for (let student in students) {
    console.log(student); // index = in
}
