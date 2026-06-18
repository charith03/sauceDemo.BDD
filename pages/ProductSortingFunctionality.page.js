const locators = require('../locators/ProductSortingFunctionality.locators')
const { expect } = require('@playwright/test')



class ProductSorting{
    constructor(page){
        this.page = page
        this.PNames = page.locator(locators.productsName)
        this.Pprices = page.locator(locators.productPrice)
        this.sortBtn = page.locator(locators.sortButton)
    }
    async extractProducts(){
        const products = []
        const count = await this.PNames.count()
        for(let i = 0; i < count; i++){
            const pname = await this.PNames.nth(i).innerText()
            const priceText = await this.Pprices.nth(i).innerText()
            const price = parseFloat(priceText.replace('$',''))
            products.push({ pname, price })
        }
        return products
    }
    async verifySorting(type) {
    await this.sortBtn.selectOption(type)
    const actualList = await this.extractProducts()
    const expectedList = [...actualList]


}

module.exports = {ProductSorting}