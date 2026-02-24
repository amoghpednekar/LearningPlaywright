let value = "5";

switch (value) {
    case 5:
        console.log("You have choose number 5");
        break;
    case "5":
        console.log("You have choose string 5");
        break;
    default:
        console.log(("not matching"));
        break;
}

// switch uses strict comparison as ===
// hence "5" !== 5 but equals "5"