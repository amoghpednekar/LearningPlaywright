let number = 0;

switch (number) {
    case false:
        console.log("you have chose false ");
        break;
    case true:
        console.log("you have chose true ");
        break;
    case 0:
        console.log("you have chose 0 ");
        break;
    default:
        console.log("Not matching the value at all");
        break;
}

// since switch uses strict comparison ===
// 0 is not equal to false
// 0 is not equal to true
// so it will compare the value and datatypes and output will be
// 0 === 0
