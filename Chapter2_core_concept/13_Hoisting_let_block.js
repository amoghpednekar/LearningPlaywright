let a = 10;

if (true) {
    // let a = 20; // this will create a new block scope   
    console.log(a); // ReferenceError because of TDZ
    let a = 20; // this will throw an error ReferenceError because of TDZ
}
console.log(a);