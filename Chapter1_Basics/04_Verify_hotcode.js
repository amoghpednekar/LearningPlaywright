//example of not a Hot code

let a = 10;
console.log(a);

//example of not a Hot code
function add(a, b) {
    return a + b;
}

//example of a Hot code
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);