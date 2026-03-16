function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} upto ${maxRetries} at ${delay} ms`);
}
retry(); // only showing default values
retry("Login"); // this will replace the default value stored
retry("Cehckout", 2); // replacing the default values with added values
retry("PDP page", 5, 500); // replacing all default values with added values