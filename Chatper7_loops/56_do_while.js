let retry = 0;

do { // do atleast oncee and then iterate to number of times wamted
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;

} while (retry <= 3);


console.log("----------");

// real examples

let testRuns = 1;
do {
    console.log("Test run count: " + testRuns);
    testRuns++;

} while (testRuns <= 5); {
    console.log("Total Tesrun count is: " + testRuns);

}
console.log("Total Tesrun count outside loop is: " + testRuns);


// example loop that counts from 1 to 5
let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 5); {
    console.log("Total numbers are : " + number);

}

// the code block runs at least once regardless of the condition. 

let a = 33;
let b;
do {
    b = a++;
} while (b >= 34); {
    console.log(b);
}

// another ex:

let count = 10;

do {
    console.log("Count value: " + count);
    count++;
} while (count < 11);

// above will still print count once sinc its do - while
// at while it checks condtion to be true to run but
// here it is false so does not execute
