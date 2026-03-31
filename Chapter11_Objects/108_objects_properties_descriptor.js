let obj = { name: "Login" }
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// Result:
// {
//   value: 'Login',
//   writable: true, ← can change the value
//   enumerable: true, ← shows in for...in / Object.keys()
//   configurable: true ← can delete or redefine
// }
