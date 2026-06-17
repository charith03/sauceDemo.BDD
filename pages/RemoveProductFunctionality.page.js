const locators  = require('../locators/RemoveProductFunctionality.locators')

class RemoveFunctionality {
    constructor(page){
        this.page = page
        this.Pname = page.locator(locators.productName)
        this.Pprice = page.locator(locators.productPrice)
        this.cartBdage = page.locator(locators.cartCount)
        this.cart = page.locator(locators.cartButton)
        this.addToCart = page.locator(locators.addToCArt)
        this.removeP = page.locator(locators.removeButton)
    }

    async getProducts(){
        const productList = []
        const count = await this.Pname.count()
        for(let i = 0; i < count; i++){
            const name = await this.Pname.nth(i).innerText()
            const price = await this.Pprice.nth(i).innerText()
            productList.push({ name, price })
            console.log(`Product ${i + 1}: ${name}`);
            console.log(`Price ${price}`);

        }
        return productList
    }

    async addProducts(){
        for(let i = 0; i < 3; i++){
            await this.addToCart.nth(i).click()
            //await this.page.waitForTimeout(1000);
        }
    }

    async goTOCart(){
        await this.cart.click()

    }

    async RemoveProduct(){
        await this.removeP.first().click()
        //await this.page.waitForTimeout(3000);
    }
}

module.exports = { RemoveFunctionality }