//Task 1:

// Create a program that determines whether a given year is a leap year. 
// A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.
// year = 2026 , no

let year;

for (let year = 2000; year <= 2100; year++) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(year + " - Is a leap year");
    }
    else {
        console.log(year + " - Is a not a leap year");

    }

}

//Task 2:
//Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is:
//  equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), 
// or scalene (no sides are equal). 
// Use an if-else statement to classify the triangle.

let side1 = 41;
let side2 = 42;
let side3 = 42;

if (side1 === side2 && side2 === side3 && side1 === side3) {
    console.log("This is an Equilateral Triangle");
} else if ((side1 === side2 && side2 !== side3) || (side2 == side3 && side3 !== side1) || (side1 == side3 && side3 !== side2)) {
    console.log("This is an Isosceles Triangle");
} else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    console.log("This is a Scalene Triangle");
} else {
    console.log("Invalid Input");
}




