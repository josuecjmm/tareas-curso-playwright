// DashboardPage, LandingPage, RegisterUserPage, 

const ParentPage = require("./parentPage.page");

// ForgotPasswordPage, ProductListPage, OpenedProductPage
class LoginPage extends ParentPage {
    constructor(page) {
        super()
        this.page = page; 
    }

    // Elemento HTML + LO que es 
    // inputUser
    // buttonLogin
    // formCreateUser
    get inputUser() {
        return this.page.locator('[data-test="username"]')
    }

    get inputPassword() {
        return this.page.locator('[data-test="password"]')
    } 

    get btnLogin() {
        return this.page.locator('[data-test="login-button"]')
    }

    get bannerError() {
        return this.page.locator('[data-test="error"]')
    }

    // METODOS 
    // action de la pagina
    // loginUser, openCart, createItem
    
    async login(user, password) {
        await super.fillInput(this.inputUser, user)
        await super.fillInput(this.inputPassword, password)
        await super.clickElement(this.btnLogin)
    }

    async waitForBannerError() {
        await super.waitForElementVisible(this.bannerError)
    }
}

module.exports = LoginPage; 