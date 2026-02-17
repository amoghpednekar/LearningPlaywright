console.log(amogh);
var amogh = "Amogh";
console.log(amogh);

//Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.
//In other words, it means that you can use a variable or function before it is declared in the code.

//hoisting will only comes when you declare var, let and const later in the code

console.log(a);
console.log("ddsddsdadadsa");
console.log("ddsddsdadadsa");
console.log("ddsddsdadadsa");
console.log("ddsddsdadadsa");
console.log("ddsddsdadadsa");
// if we run this code, it will throw an error since hoisting will not come in this case
// because we are not using var, let or const

var a = 10;
// if we run this code, it will not throw an error since hoisting will come in this case
