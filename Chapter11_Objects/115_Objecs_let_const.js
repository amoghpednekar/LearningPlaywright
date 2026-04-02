let config = { browser: "chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

config = { browser: "Safari" };
console.log(config); //reassigning with updated value 
// print
console.log("---- ")


const config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

// config1 = { browser: "Safari" }; // assignment to const is not allowed
// console.log(config1);