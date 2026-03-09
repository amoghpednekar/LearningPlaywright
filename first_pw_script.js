const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/');
  await expect(page.getByRole('link', { name: 'The Testing Academy' })).toBeVisible();
  await expect(page.getByText('Master all three tracks and')).toBeVisible();
  await expect(page.getByRole('banner')).toMatchAriaSnapshot(`
    - img
    - text: /Playwright · \\d+ Days/
    - img
    - text: /AI Automation Tester · \\d+ Weeks/
    - img
    - text: /Selenium · \\d+ Days · Java/
    - heading "Playwright, AI Testing & Selenium Master All 3 Tracks" [level=1]
    - paragraph: /Master all three tracks and become an AI-powered automation tester\\. Playwright \\(\\d+ Days\\), AI Automation Testing \\(\\d+ Weeks\\), and Selenium with Java \\(\\d+ Days\\) — with live assessments, interactive coding, and everything you need to become job-ready\\./
    - text: /\\d+,\\d+\\+ Career Transformations \\d+% Job Placement Rate \\d+% Average Salary Increase \\d+ Days to Transform/
    - link /Start Your \\d+-Day Transformation/:
      - /url: /register
      - text: ""
      - img
    - link "Take Skill Assessment":
      - /url: /skill-check
      - img
      - text: ""
    - img
    - text: /\\d+-Day Challenge/
    - img
    - text: Live Assessments
    - img
    - text: Interactive Coding
    - img
    - text: Resume Scorecard
    - img
    - text: Portfolio Building
    `);
});