// basic function check

function statuscodeCheck(ourStatusCode) {
    if (ourStatusCode >= 200 && ourStatusCode < 300) {
        console.log("Request is fine");
    }
}
statuscodeCheck(201);

//arrow function

const statuscodeCheck1 = (ourStatusCode) => {
    if (ourStatusCode >= 200 && ourStatusCode < 300) {
        console.log("Request is fine!");
    }
}
statuscodeCheck1(200);

// curly brackets without arrow that is expression based
const statuscodeCheck2 = function (ourStatusCode) {
    if (ourStatusCode >= 200 && ourStatusCode < 300) {
        console.log("Request is fine!!!");
    }

}
statuscodeCheck2(204);