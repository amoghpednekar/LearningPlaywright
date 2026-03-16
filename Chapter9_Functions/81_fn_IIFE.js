//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1() {
    console.log("Hi")
}
name1();

//IIFE
//syntax is similar to function just wrap whole function in ()
// last "()" call it this way
(function name2() {
    console.log("Hi pro max");

})(); //They don't need to be called. 

//ex1:

(function env() {
    console.log("This is dev env");
})();

// //ex2: // don't think it works

// (function namesMe(name) {
//     return `Hellow, ${name}`;
// })();

//ex3: arrow without braces

(() => console.log("Could be staging")
)();

//ex4: arrow with curly braces
(() => {
    console.log("Could be staging again")
})();