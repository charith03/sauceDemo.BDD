const { expect } = require('@playwright/test')
const locators = require('../locators/ProductDetailsPage.locators')

class ProductDetailsPage{
    constructor(page){
        this.page = page
        this.prodNameClick = page.locator(locators.clickONProduct)
        this.prodName = page.locator(locators.productName)
        this.prodDescription = page.locator(locators.ProductDescription)
        this.prodPrice = page.locator(locators.ProductPrice)
        this.backTOInventory = page.locator(locators.backToProds)
    }
    // async ProductPage(){
    //     //await this.prodNameClick.nth(0).click()
    // }
    async validateDetails(){
        await this.prodNameClick.nth(0).click()
        await expect(this.prodName).toBeVisible()
        await expect(this.prodDescription).toBeVisible()
        await expect(this.prodPrice).toBeVisible()
        console.log('==============================================================')
        console.log('the selected product contains Name, description and price for that proudct in deatils pages')
    }
    // async backTOInventoryPage(){
    //     //await this.backTOInventory.click()
    // }
    async InventoryPage(){
        await this.backTOInventory.click()
        //const count = await this.prodName.count()
        //console.log('total products: ', count)
        expect(this.prodNameClick).toHaveCount(6)
        console.log('==============================================================')
        console.log('all products were displaying on the page')
    }
}

module.exports = {ProductDetailsPage}