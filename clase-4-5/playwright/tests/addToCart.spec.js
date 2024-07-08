const { expect } = require('@playwright/test');
const { test } = require('../utils/fixtures')
const { USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO } = process.env;

test.describe('Add To Cart', () => {
    test.beforeEach(async ({ page, loginPage, productListPage }) => {
        await page.goto('/')
        await loginPage.login(USER_SAUCE_DEMO, PASSWORD_SAUCE_DEMO)
        await productListPage.waitForProductsPage()
    })

    test('Verify I can add an item to the Cart', async ({
        productListPage, productOpenedPage,
        topBarPage, cartPage
    }) => {
        const elementToFind = 'Sauce Labs Fleece Jacket'
        await productListPage.selectProductByName(elementToFind)
        await productOpenedPage.addProductToCart()
        await expect(productOpenedPage.btnRemoveFromCart).toBeVisible()
        await topBarPage.openCart()
        await expect(cartPage.listCart).toContainText(elementToFind)
    })
})
