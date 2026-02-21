//true results
if ("hello") console.log("String is truthy"); // "hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

console.log("------------");

// false results
if ("") console.log("Won't print");  // "" -> falsy result
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (NaN) console.log("Won't print");
if (0) console.log("Won't print");

//Note: if "If condition" has single statement then we can write it in single line like above