// this is with operators, please confirm what should be the output of following:

let myScore = 78;

switch (true) {
    case myScore >= 90:
        console.log("You have Grade A");
        break;
    case myScore >= 80 && myScore < 90:
        console.log("You have Grade B");
        break;
    case myScore >= 70 && myScore < 80:
        console.log("You have Grade C");
        break;
    case myScore >= 60 && myScore < 70:
        console.log("You have Grade D");
        break;
    case myScore >= 50 && myScore < 60:
        console.log("You have Grade E");
        break;
    default:
        console.log("You have Grade F");
        break;
}

// in this case we are using switch(true) so it will check the condition in each case and if it is true it will execute the code
// this is a way to use switch statement with conditions    