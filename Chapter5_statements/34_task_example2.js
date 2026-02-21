// Write a program that prints numbers from 1 to 100. However, for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."



for (let myNumber = 1; myNumber <= 100; myNumber++) {
    if (myNumber % 3 === 0) {
        console.log("Fizz");

    } else if (myNumber % 5 === 0) {
        console.log("Buzz");

    } else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
        console.log("FizzBuzz");

    }
    else {
        console.log(myNumber);


    }

}
