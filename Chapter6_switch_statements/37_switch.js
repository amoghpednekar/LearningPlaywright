// Switch: It is cleaner than long if/else if chains when comparing a SINGLE value against many options. 
//Switch uses **strict comparison (===)**.

//example, days added as numbers
// 0=Sunday, 1= Monday, 2= Tuesday, 3= Wednesday, 4= Thursday, 5= Friday, 6= Saturday   

let day = 2;
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

// break is important in switch statements, otherwise it execute all the case after the match

