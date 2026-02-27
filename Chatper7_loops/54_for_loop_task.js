// Task 1:
//1️⃣ Print "Hello" 5 times

for (let index = 0; index < 5; index++) {
    console.log("Hello printing...");

}

// Task 2:
// Print numbers from 1 to 10

for (let number = 1; number <= 10; number++) {
    console.log("Your number is: " + number);
}

//Task3:
// Print even numbers from 1 to 20

for (let numbr = 1; numbr <= 20; numbr++) {
    if (numbr % 2 === 0) {
        let evenNumber = numbr;
        console.log(evenNumber);
    } else {
    }
}

// Task4:
//Print the sum of first 10 natural numbers
let sum = 0;
for (let naturalNumb = 1; naturalNumb <= 10; naturalNumb++) {
    sum = sum + naturalNumb; // this is the expression to be used
}
console.log(sum); // this will be out of loop to print the total

//Task5:
// Print the multiplication table of 5
let numb = 5;
for (let id = 1; id <= 10; id++) {
    let multi = numb * id;
    console.log(multi);
}

