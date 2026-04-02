const Env = {
    url: "app.vwo.com",
    timeout: 3000,
    name: "QA",
    retries: 2,
    browser: "Chrome"
};

console.log(Env);

const expected_response = {
    status: 200,
    body: {
        user: { role: "Admin", status: "Active" }
    }
}
console.log(expected_response);
console.log(expected_response.status);
console.log(expected_response.body);
console.log(expected_response.body.user.role);

const config = {
    // Base URLs
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',
    //user info
    testUser: {
        userName: "Amogh",
        password: "dashwod"
    },
    //log info
    loglevel: "log Info",
    //retry connection
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10)
}
console.log(config);
