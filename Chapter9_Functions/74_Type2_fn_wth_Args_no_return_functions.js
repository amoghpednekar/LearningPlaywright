// Type 2 Functions

// with argument/parameter but no return type. 

function greetbyName(name) { // name is arg/param here
    console.log("Hi", name);

}
greetbyName("Amogh"); // args/params value
greetbyName("Mansi");

function myAge(age) {
    console.log(age);
}
myAge(32);

let returnMyage = myAge(70); // this will give output as value added
console.log(returnMyage); // this will not return anything since there is no return in the function

let greetbyName1 = greetbyName("Sak");
console.log(greetbyName1);

