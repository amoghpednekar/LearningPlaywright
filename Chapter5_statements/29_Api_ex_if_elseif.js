let statusCode = 301;

if (statusCode === 200) {
    console.log("This is success status code");


} else if (statusCode === 404) {
    console.log("This means page not found");



} else if (statusCode === 500) {

    console.log("This is bad, it's an internal server error");

}
else {
    console.log("This is unknown status code");

}