//Interview question: is to indetify the output of the following code

let fruit = "Banana";

switch (fruit) {
    case "Apple":
        console.log("You have choose Apple");
    case "Banana":
        console.log("You have choose Banana");
    case "Cherry":
        console.log("You have choose Cherry");
    case "Grapes":
        console.log("You have choose Grapes");
    case "Mango":
        console.log("You have choose Mango");
    default:
        console.log("Not a Fruit");
}

// since we are not using break, it will execute all the cases after the match here
