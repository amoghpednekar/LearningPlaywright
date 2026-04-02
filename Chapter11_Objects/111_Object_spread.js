const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1, ...obj2 }; // ... to use spread
console.log(copy);

//this keyword:

const user = {
    name: "Amogh",
    sayName(lastname) {
        this.name += lastname;
        return this.name;
    }

}
console.log(user.sayName("Pednekar"));

