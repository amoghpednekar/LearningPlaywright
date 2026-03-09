let browsers = ["Chrome", "Firefox", "Safari", "Egde", "Opera"];
console.log(browsers);
console.log(browsers.length);

console.log(browsers.pop());
console.log(browsers);

console.log("-------okay bye ----");

let removed = browsers.shift();
console.log(removed);
console.log(browsers);
let adds = browsers.unshift("Chrome");
console.log(adds);
console.log(browsers);
let index;
for (index = 0; index < browsers.length; index++) {
    //console.log(browsers[index]);
    if (browsers[index] === "Chrome") {
        console.log("We do have a Chrome browser");
    }
}







