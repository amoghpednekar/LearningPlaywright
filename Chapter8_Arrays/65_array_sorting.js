//Sorting

let fruits = ["banana", "apple", "cherry", "ace", "babita"];
//fruits.sort();
console.log(fruits.sort());
//  alphabetical by default

let nums = [1, 23, 11, 2, 3];
console.log(nums.sort()); // this will give output based on the first char checks
// in this case sorting will not be an exact one

//we can do sorting like this for correct sorts
console.log(nums.sort((a, b) => a - b));

//if we want to do reverse sorting, we can do:
console.log(nums.sort((a, b) => b - a));

// the function above basically iterates through each -
// array elements and then starts adding the output

//What happens in case multiple data types:

let multarr = ["Amogh", 32, true, null, 2];
console.log(multarr.sort());
//it will use same logic of comparing fist char
