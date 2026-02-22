// Write a program that determines whether a given number is positive or not.

let number = -0.1;

if (number >= 0) {
    console.log("This is a positive number");
} else {
    console.log("This is a negative number");
}

// Write a program that checks if a number is even or odd from o to 100.

for (let numNew = 0; numNew <= 100; numNew++) {
    if (numNew % 2 === 0) {
        console.log(numNew + " this is even number");
    }
    else {
        console.log(numNew + " This is odd number");
    }
}

// Write a program to determine the greater of two numbers.

let numb1 = 20;
let numb2 = 40;
console.log(`${numb1},${numb2}`);
if (numb1 > numb2) {
    console.log(numb1 + " - This one is greater amongst two");
} else {
    console.log(numb2 + " - This one is greater amongst two");
}

//Write a program that assigns a letter grade based on a numerical grade.

A = 90 - 100
B = 80 - 89
C = 70 - 79
D = 60 - 69
F = 0 - 59

let score = 66;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
    console.log("You have obtained " + grade + " Grade");
} else if (score >= 80 && score <= 89) {
    grade = "B";
    console.log("You have obtained " + grade + " Grade");
} else if (score >= 70 && score <= 79) {
    grade = "C";
    console.log("You have obtained " + grade + " Grade");
} else if (score >= 60 && score <= 69) {
    grade = "D";
    console.log("You have obtained " + grade + " Grade");
} else if (score >= 0 && score <= 59) {
    grade = "F";
    console.log("You have obtained " + grade + " Grade");
}
else {
    console.log("You didn't appeared from exams, hence 'No Grade or Invalid Grade'");
}

// Write a program that calculates the ticket price based on age
// Following conditions: 
// age below 12 pay a ticket price of 5
// age below 18 pay a ticket price of 10
// age below 60 pay a ticket price of 20
// age over 60 play a ticket price of 15.


let passengerAge;
let ticketPricee;

if (passengerAge <= 12 && passengerAge > 0) {
    ticketPricee = 5;
    console.log("As your age is " + passengerAge + " ,You'll have to pay " + ticketPricee + "Rs. for the ticket");
} else if (passengerAge <= 18 && passengerAge > 12) {
    ticketPricee = 10;
    console.log("As your age is " + passengerAge + " ,You'll have to pay " + ticketPricee + "Rs. for the ticket");
} else if (passengerAge <= 60 && passengerAge > 18) {
    ticketPricee = 20;
    console.log("As your age is " + passengerAge + " ,You'll have to pay " + ticketPricee + "Rs. for the ticket");
} else if (passengerAge < 60) {
    ticketPricee = 15;
    console.log("As your age is " + passengerAge + " ,You'll have to pay " + ticketPricee + "Rs. for the ticket");
}
else {
    console.log("Invalid age Input, Please enter correct age");
}

// Write a program that determines if a year is a leap year.

//(Year % 4 == 0 AND Year % 100 != 0) OR (Year % 400 == 0)

for (let year = 2000; year <= 2100; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a leap year")
    } else {
        console.log(year + " is not a leap year");
    }
}

// Write a program that calculates a discount based on the purchase amount.
// Prices equal or over 1000 discount have a discount of 20. 
// Prices equal or over 500 have a discount of 10. Otherwise discount is 0

let purchaseAmount = 1001;
let discountPercentage;

if (purchaseAmount >= 1000) {
    discountPercentage = 20;
    totalDiscount = purchaseAmount * discountPercentage / 100;
    console.log("You are eligible for a discount percentage of " + discountPercentage + " And discounted amount is: " + totalDiscount);
} else if (purchaseAmount >= 500 && purchaseAmount < 1000) {
    discountPercentage = 10;
    totalDiscount = purchaseAmount * discountPercentage / 100;
    console.log("You are eligible for a discount percentage of " + discountPercentage + " And discounted amount is: " + totalDiscount);
}
else {
    discountPercentage = 0;
    console.log("You are not eligible for a discount percentage of as your purchase amount is less than 500");
}

