const obj = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.keys(obj)); // get only keys
console.log(Object.values(obj)); //get only values
console.log(Object.entries(obj));//get key value pair


const user = { name: "Amo", age: 33 };

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Object.keys/values/entries
Object.keys(user).forEach(key => {
    console.log(key);
});

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

