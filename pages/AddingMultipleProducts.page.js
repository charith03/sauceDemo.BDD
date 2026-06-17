const locators = require('../locators/AddingMultipleProducts.locators')

class AddMultipleProducts{
    constructor(page){
        this.page = page
        this.prodNames = page.locator(locators.productsName)
        this.CartBadge = page.locator(locators.cartBadge)
        this.addToCart = page.locator(locators.addToCArt)
        this.removeButn = page.locator(locators.removeButton)
    }
    async ExtractProducts(){
        const productNames = []
        const count = await this.prodNames.count()
        for(let i=0; i < count; i++){
            const name = await this.prodNames.nth(i).innerText()
            productNames.push(name)
            console.log('Product:',name)
        }
        return productNames
    }
    async addProducts(){
        for(let i=0; i<3; i++){
            await this.addToCart.nth(i).click()
            //await this.page.waitForTimeout(1000);

        }
    }
    async reloadPage(){
        await this.page.reload()
        //await this.page.waitForTimeout(1000);

    }

}
module.exports = {AddMultipleProducts}