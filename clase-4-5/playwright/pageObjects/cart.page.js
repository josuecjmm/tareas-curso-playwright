const ParentPage = require("./parentPage.page");

class CartPage extends ParentPage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    get listCart() {
        return this.page.locator('.cart_list')
    }
}

module.exports = CartPage; 