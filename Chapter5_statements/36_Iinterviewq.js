//Q1: Why does `if([])` evaluate to true even though the array is empty?
// - because in javascript, empty array is considered as truthy value
// - An empty array `[]` is an object, and ALL objects are truthy in JavaScript

if ([]) {
    console.log("True!"); // this should show as output
}

// Q2: **Should I use `if(response)` or `if(response !== null)` in test assertions? 
// - Use `if(response != null)` which catches both null and undefined. 
// Plain `if(response)` also fails on `0`, `""`, and `false` which might be legitimate/correct API values.

// case 1
let response;
if (response) {
}
// case 2
if (response !== null) {
}
// always use case 2 for better assertions

// **Q3:** What is the difference between `if(x == 5)` and `if(x === 5)` in testing?

// - == only compares the value but  === compares the value and type and it is 
// also called as strict comparison in JS, always recommeneded to use === in QA automation

// **Q4:** Can I have an else if without a final else? 
//- yes we can have it but in QA automation we should always have a final else
// for example to fall for default error case checking so unexpected conditions are caught instead of silently passing.

if (condition) {

} else if (condition1) {

}


// **Q5:** Is there a performance difference between many if/else if vs switch?
// - For many conditions comparing the same value, switch is slightly more readable and may be optimized better. 
// But for complex conditions with different comparisons, if/else if is the only option.










