// 1D array,list - duplicate element
let results = ["pass", "pass", "fail", "pass", "fail"];

//2D — array of arrays (like a table/grid)

//ex:1

let multdArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(multdArray);

//ex:2

let multdArray1 = [
    [1, 2, 3, 4]
];
console.log(multdArray1);
console.log(" ---- ")

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(multdArray[i][j]);
    }
} //this print each array element line by line

