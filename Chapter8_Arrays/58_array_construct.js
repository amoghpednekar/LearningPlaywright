//preferred way

let fruitBasket = ["Banana", "Cherry", "Gauva", "Apple", "Oranges"];
console.log(fruitBasket);

// create array withe empty allocations

//1. Array creation with Empty array allocations:
let arr = new Array(3) // this creates empty array with 3 length
console.log(arr);

//2. Array creation with values

let arr1 = new Array(1, 2, 3);
console.log(arr1);

//3. Array creation with multiple data types

let details = new Array("Amogh", 32, true, null);
console.log(details);

//4. of method to create array
// in this method "new" keyword is not used
let detailsNew = Array.of("Amogh", 32, true, null, 27.33, "No.1");
console.log(detailsNew);
console.log(detailsNew.length);
console.log(detailsNew[4]);

// 5. create array using from keyword

let myText = "Amogh";
myText = Array.from("Amogh");
console.log(myText);








