// Without functions we have to add the logic this way

let score = 66;
let results = score >= 60 ? "Pass" : "Fail";
console.log(results);

let scrore1 = 45;
let result1 = scrore1 > 45 ? "Pass" : "Fail";
console.log(result1);

// had to add the condition multiple times in above

console.log("----END of not using function----");

// With functions:

// this will give result as undefined since we haven't used
// return keyword

function testResults(scrore2) {
    scrore2 >= 45 ? "Pass" : "Fail";
}
console.log(testResults(45));

//with return keyword, for getting the value

function testResults1(scrore2) {
    return scrore2 >= 67 ? "Pass" : "Fail";
}
console.log(testResults1(67));

// without adding console log

function testResult2(scrore2) {
    return scrore2 <= 30 ? "Pass" : "Fail";

}
testResult2(33); // nothing will print

console.log(testResult2(33)); // this will print output
