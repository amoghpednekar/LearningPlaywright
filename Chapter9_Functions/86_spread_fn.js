function add(a, b, c) { // just a function with params

    return a + b + c; // returning this 

}
let num = [1, 2, 3]; // storing values as array
console.log(add(...num)); // get all the values and use function add
// and results will return. a+b+c

// lets try with api codes
// spread is basically (...test)
function hasError(...codes) {
    return codes.some(c => c >= 500) //extract values if it has 400
}
let responseCodes = [200, 201, 404];

console.log(hasError(...responseCodes)); //  false