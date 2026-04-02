let grid = [
    [10, 20, 40],
    [40, 30, 60],
    [99, 100, 22]
];

//its a 3X3 grid

console.log(grid[0][0]);
console.log(grid[1][2]);

console.log(grid.length);
console.log(grid[0].length);

grid[0][0] = 11;
console.log(grid);
console.log(grid[0][0]);

console.log(grid[grid.length - 1][grid[0].length - 1]);// Last element 
//same as 
console.log(grid[2][2]);


