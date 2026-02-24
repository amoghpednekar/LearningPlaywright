let day = 7;
switch (day) {
    case 0:
        console.log("This is Sunday - Relax yourself");
        break;
    case 1:
        console.log("This is Monday - Sprint planning day");
        break;
    case 2:
        console.log("This is Tuesday - Plan your code ");
        break;
    case 3:
        console.log("This is Wednesday - Write actual code");
        break;
    case 4:
        console.log("This is Thursday - Deploy your code");
        break;
    case 5:
        console.log("This is Friday - Test your code");
        break;
    case 6:
        console.log("This is Saturday - It's a weekend");
        break;
    default:
        console.log("Invalid input for day");
        break;
}

//default case is important in QA automation to handle the unexpected results
