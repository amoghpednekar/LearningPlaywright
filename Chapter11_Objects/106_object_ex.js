let config = {}; //empty object
config.browser = "Chrome"; // adding values to object
config.timeout = 3000;
config.timeout = 5000; //updated value
console.log(config);
delete config.browser; // we can delete a key value from object
config.timeout = 6000;
config.result = "Pass";
console.log(config);
