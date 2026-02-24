// check in case of multiple cases are same

let x = 10;

switch (x) {
    case 10:
        let a = 20;
        let b = 30;
        console.log(a + b);
        break;
    case 10:
        let c = 20;
        let d = 40;
        console.log(d + c);
        break;
    case 30:
        let g = 20;
        let h = 30;
        console.log(h - g);
        break;
    default:
        let e = 40;
        let f = 30;
        console.log(e * f);
        break;
    // default:
    //     let e = 40;
    //     let f = 30;
    //     console.log(e * f);
    //     break;
}

// we are allowed to have duplicate cases in switch
// but it will execute the first case
// we can not have double "default" cases

