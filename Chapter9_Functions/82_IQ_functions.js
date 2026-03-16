function runTests(Name, Status, RunDuration) {
    return `${Name}: ${Status} (${RunDuration})ms`;
}
//pass args to the method and store it into a variable
let results = runTests("Amogh", "Pass", 320);
console.log(results); // call the variable to display results

