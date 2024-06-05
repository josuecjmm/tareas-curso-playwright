const {chromium} = require('playwright')

async function runTest() {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
    const pageTitle = await page.getByText('Swag Labs').textContent()
    console.assert(pageTitle === 'Swag Labs', 'Page title incorrect!')

    await browser.close();
}

runTest();