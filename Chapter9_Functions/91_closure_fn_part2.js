function makeCounter(start = 0) {

    let count = start;  // this variable is "closed over"
    return {
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }
    }

}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get()); // this is 3 since increment is called twice
counter.decrement();
console.log(counter.get()); // this will do -1 hence it is 2


///My exmaple

function myCounter(starting = 0) {

    let counting = starting; //Inner accessible
    return {
        myIncrement() { counting++; },
        myDecrement() { counting--; },
        getCounting() { return counting; }

    }

}

let counters = myCounter(0);
counters.myIncrement();
counters.myDecrement();
console.log(counters.getCounting()); // we have to call it this way to get info on count
counters.myIncrement();
counters.myIncrement();
counters.myIncrement();
counters.myDecrement();
counters.myDecrement();
console.log(counters.getCounting());
console.log("-------ok------");

console.log(counters.getCounting());

// some ex:

function test() {
    // --- JS mentally rewrites it like this ---
    var a;           // hoisted: declaration only, value = undefined
    function foo() { return 2; }  // hoisted: entire function

    console.log(a);    // a exists but = undefined ← prints: undefined
    console.log(foo()); // foo is fully hoisted ← prints: 2

    a = 1;  // assignment stays here (not hoisted)
}

test();
//1 - Undefined
//2

//exL new
var a = 1;

function someFunction(number) {
    function otherFunction(input) {
        return a;
    }

    a = 5;

    return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);


