//Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

A: 90 - 100

B: 80 - 89

C: 70 - 79

D: 60 - 69

F: 0 - 59


let score = - 0.001;

if (score >= 90 && score <= 100) {
    console.log("You have gained A grade");
} else if (score >= 80 && score <= 89) {
    console.log("You have gained B grade");
} else if (score >= 70 && score <= 79) {
    console.log("You have gained C grade");
} else if (score >= 60 && score <= 69) {
    console.log("You have gained D grade");
} else if (score >= 0 && score <= 59) {
    console.log("You have gained F grade");
}
else {
    console.log("Invalid score");
}