// DashboardPage, LandingPage, RegisterUserPage, 
// ForgotPasswordPage, ProductListPage, OpenedProductPage
class LoginPage {
    constructor(page) {
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

    // METODOS 
    // action de la pagina
    // loginUser, openCart, createItem
    
    async login(user, password) {
        await this.inputUser.fill(user)
        await this.inputPassword.fill(password)
        await this.btnLogin.click()
    }
}

module.exports = LoginPage; 