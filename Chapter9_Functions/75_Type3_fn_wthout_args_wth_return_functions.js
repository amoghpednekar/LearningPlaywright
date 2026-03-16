function sayHello() {
    let a = 93.5;
    // console.log(a);
    console.log("----");
    return a;
}
sayHello(); // only prints what is there is console log

let relative = sayHello(); // only prints what is there is console log
console.log(relative); // returns value of a since we are returning value of a in the function

