const a = 10;
// a = 20; // this will throw an error TypeError: Assignment to constant variable.

if (true) {
    //const a = 20; // this will create a new block scope   
    console.log(a); // ReferenceError because of TDZ
    const a = 20; // this will throw an error ReferenceError because of TDZ
}
console.log(a);