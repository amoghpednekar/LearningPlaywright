let arr = [1, 2, 3];
console.log(arr);
let copy = arr; // stores value of arr into copy
console.log("-----");
console.log(arr);
copy.push(4); // this will push value 4 into copy array and arr
//since copy = arr
console.log(arr.length); // this will give length forr arr array
console.log(copy); // this will print new value for copy [1,2,3,4]
console.log(arr);
