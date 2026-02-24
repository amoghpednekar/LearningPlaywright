// for example we have different status codes to verify in apis
// 200 OK
// 201 Created
// 204 No Content
// 400 Bad Request
// 401 Unauthorized
// 403 Forbidden
// 404 Not Found
// 500 Internal Server Error
// 502 Bad Gateway
// 503 Service Unavailable
// 504 Gateway Timeout


let stausCode = 200;

switch (stausCode) {
    case 200:
        console.log("This is 200 - OK");
        break;
    case 201:
        console.log("This is 201 - Created");
        break;
    case 204:
        console.log("This is 204 - No content");
        break;
    case 400:
        console.log("This is 400 - Bad request");
        break;
    case 401:
        console.log("This is 401 - Unauthorized");
        break;
    case 403:
        console.log("This is 403 - Forbidden");
        break;
    case 404:
        console.log("This is 404 - Not found!");
        break;
    case 500:
        console.log("This is 500 - Internal Server Error");
        break;
    case 502:
        console.log("This is 502 - Bad Gateway");
        break;
    case 503:
        console.log("This is 503 - Service Unavailable");
        break;
    case 504:
        console.log("This is 504 - Gateway Timeout ");
        break;
    default:
        console.log("Invalid status code or Status code does not match");
        break;
}