// Adding values to the arrays at last
// Add: 
let num = [1, 2, 3, 4];
console.log(num);
//push is the method use to add the value at last

num.push(5);
console.log("updated array: " + num);

//let see if we can push multiple values at back
// adding multiple values at last with push
num.push(6, 7, 8);
console.log(num);

// removing: 
// pop is used
num.pop();
console.log(num);
// --------------------------------

// adding and removing values at first and 
//we use shift = removea the first value 
//Unshft = add the value to the first and rest is kept as is


let geo = ["Pakistan", "India", "US", "Russia", "China"];
console.log(geo);

geo.shift();
console.log(geo);

geo.unshift("India is my country");
console.log(geo);

//----------------

// splice

geo.splice(2, 2);// this is removing index 2 onwards 2 values
//in this case "US", "Russia" will be removed
console.log(geo);
// [ 'India is my country', 'India', 'China' ]

geo.splice(2, 2, "New Zeland", "Indonesia");
console.log(geo);

geo.splice(2, 1, "New Zeland new");
console.log(geo);





