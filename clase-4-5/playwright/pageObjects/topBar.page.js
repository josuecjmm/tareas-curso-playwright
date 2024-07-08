const ParentPage = require("./parentPage.page");

class TopBarPage extends ParentPage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    get btnCart() {
        return this.page.locator('[data-test="shopping-cart-link"]')
    }

    async openCart() {
        await super.clickElement(this.btnCart)
    }
}

module.exports = TopBarPage; 