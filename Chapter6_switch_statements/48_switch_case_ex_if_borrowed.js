// Write a program that calculates the ticket price based on age
// Following conditions: 
// age below 12 pay a ticket price of 5
// age below 18 pay a ticket price of 10
// age below 60 pay a ticket price of 20
// age over 60 play a ticket price of 15.

// for expression we use true, if need to run the
// first expression which is becoming true

let age = 1;

switch (true) {
    case age <= 12 && age > 0:
        console.log("You have to ticket price of 5 RS");
        break;
    case age >= 13 && age < 18:
        console.log("You have to ticket price of 10 RS");
        break;
    case age >= 18 && age <= 60:
        console.log("You have to ticket price of 20 RS");
        break;
    case age < 60:
        console.log("You have to ticket price of 15 RS");
        break;
    default:
        console.log("Age outside the range");
        break;
}

// Write a program that calculates a discount based on the purchase amount.
// Prices equal or over 1000 discount have a discount of 20. 
// Prices equal or over 500 have a discount of 10. Otherwise discount is 0


let price = 999;
let discountpercent;
let discountamount;

switch (true) {
    case price >= 1000:
        console.log("You are eligible for 20% discout");
        discountpercent = 20;
        discountamount = price * (discountpercent / 100);
        console.log("Your discount amount is " + discountamount);
        break;
    case price >= 500 && price < 1000:
        console.log("You are eligible for 10% discout");
        discountpercent = 10;
        discountamount = price * (discountpercent / 100);
        console.log("Your discount amount is " + discountamount);
        break;
    default:
        console.log("You are eligible for 0% discout");
        discountpercent = 0;
        discountamount = price * (discountpercent / 100);
        console.log("Your discount amount is " + discountamount);
        break;
}

// //Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.
// I kmow this is not a correct way but just a beginner program
// 0 - 11 - morning
// 12 - Noon
// 13 - 17 - afternoon
// 18 - 23 - night

let timeofDay = 12;

switch (true) {
    case timeofDay >= 0 && timeofDay <= 11:
        console.log("Good morning everyone");
        break;
    case timeofDay === 12:
        console.log("Good Noon everyone");
        break;
    case timeofDay >= 13 && timeofDay <= 17:
        console.log("Good afternoon everyone");
        break;
    case timeofDay >= 18 && timeofDay <= 19:
        console.log("Good Evening everyone");
        break;
    case timeofDay >= 20 && timeofDay <= 23:
        console.log("Good Night everyone");
        break;
    default:
        console.log("Invalid input");
        break;
}