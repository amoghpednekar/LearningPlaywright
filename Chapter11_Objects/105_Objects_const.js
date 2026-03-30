const users = {
    name: "AMogH PeDneKaR",
    age: 33,
    married: true
};
console.log(users);

// Accessing properties

console.log(users.name);
console.log(users["age"]);

// Dynamic property access
const key = "age"; //assigning a key value to another
console.log(users[key]);// accessing element dynamic

// Adding/modifying properties
users.city = "Mexico";
users.age = 32;
console.log(users);


