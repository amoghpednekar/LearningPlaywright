// Write a function makeRateLimiter(limit) that returns a function. 
// Each call to the returned function should track usage and return true if under limit
// , false when limit is exceeded.

//static way:
function makeRateLimiter() {

    let call = 0;

    function check() {
        call++;
        return call <= 4;

    }

    return check;
}

let limit = makeRateLimiter();
console.log(limit());
console.log(limit());
console.log(limit());
console.log(limit());
console.log(limit());


//dynamic way:

function rateLimit(limite) {
    let calle = 0;
    function checke() {
        calle++;
        return calle <= limite;
    }
    return checke;
}

let limitee = rateLimit(1);
console.log(limitee());

console.log(limitee());
console.log(limitee());
console.log(limitee());
