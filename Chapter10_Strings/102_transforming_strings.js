// Transforming Strings

let mystr = "  Hellow Amogh. !!   ";

console.log(mystr.toUpperCase());
console.log(mystr.toLowerCase());

// Trim whitespace:
//by defaults trim from both sides - 
console.log(mystr.trim());
//trim from start - 
console.log(mystr.trimStart());
//trim from end -
console.log(mystr.trimEnd());


// Replace:

let msg = "Test: Fail. Test: Fail.";
//replace only first item -
console.log(msg.replace("Fail", "Pass"));
//replaceAll items -
console.log(msg.replaceAll("Fail", "Pass"));
//replacce with regex onlyfirst-
console.log(msg.replace(/Fail/, "Pass"));
//replacceAll with regex -
console.log(msg.replace(/Fail/g, "Pass")); //g is the global flag to get all the matching elements
// Real example -
let url = "https://app.vwo.con?app=pramod";
console.log(url.replace("app", "qa"));


// Concatenation:
"Hello" + " " + "World";
let word1 = "Hellow";
let word2 = "World"
console.log(`${word1}`.concat(" - ", `${word2}`));

// Splitting & Joining:
let words = "Pass, Fail, Skip".split(",");
console.log(words);

let world = "hellow".split(""); // to break it down into single letter
console.log(world);

let caseResult = "test_login_pass";
console.log(caseResult.split("_").join(" "));

// Template literal (joining with format): 
let date = [2026, "March", 30];
let newDate = date.join("-");
console.log(date);
console.log(newDate);





