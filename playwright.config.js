// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './',
    testMatch: ['**/*pw_script*.js', '**/PW_JS_TEST1/**/*.js'],
    fullyParallel: false,
    reporter: 'list',
    use: {
        headless: false,
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
