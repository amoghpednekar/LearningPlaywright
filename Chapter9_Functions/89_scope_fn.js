// Scope in Functions

let env = "Staging"; //global scope

function testing() {
    let result = "Pass";
    console.log(result);
    console.log(env);
}
testing(); // Since env is glabal scope, it was accessible inside function as well
console.log(env); // this should work
//console.log(timeout); // this won't since it is function scoped 
// ReferenceError: timeout is not defined

// nestes scopes| blocked scope

function outer() {
    let x = 10;
    console.log(x);

    function inner() {
        let y = 21;
        console.log(y);
        console.log(x);
    }
    //console.log(y); // ReferenceError: y is not defined because of blocked scope
    inner();
    console.log(x);
}
//inner(); // ReferenceError: inner is not defined because of blocked scope
outer();