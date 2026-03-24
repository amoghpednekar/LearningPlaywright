function outer() {
    console.log("hello!");

    console.log("Outer function called");

    function inner() {
        console.log("Inner function called")

    }
    return inner;

}
outer();
console.log("---------Y--------");

// inner();
// console.log("---------X--------"); // ReferenceError: inner is not defined

let fn_inner = outer();
fn_inner();
