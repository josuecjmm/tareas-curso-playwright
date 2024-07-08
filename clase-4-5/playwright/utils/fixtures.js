const {test: base} = require('@playwright/test')
const LoginPage = require('../pageObjects/login.page')
const ProductListPage = require('../pageObjects/products.page')
const ProductOpenedPage = require('../pageObjects/productOpened.page')
const TopBarPage = require('../pageObjects/topBar.page')
const CartPage = require('../pageObjects/cart.page')

export const test = base.extend({
    loginPage: async({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },
    productListPage: async({page}, use) => {
        const productListPage = new ProductListPage(page);
        await use(productListPage)
    },
    productOpenedPage: async({page}, use) => {
        const productOpenedPage = new ProductOpenedPage(page);
        await use(productOpenedPage)
    },
    topBarPage: async({page}, use) => {
        const topBarPage = new TopBarPage(page);
        await use(topBarPage)
    },
    cartPage: async({page}, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage)
    },
})