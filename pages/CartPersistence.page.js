const locators = require('../locators/CartPersistence.locators')
const { expect } = require('@playwright/test')

class CartPersistence {
    constructor(page){
        this.page = page
        this.addToCartBtn = page.locator(locators.addtocart)
        this.cartBadge = page.locator(locators.cartBadge)
        this.removeBtn = page.locator(locators.removeButton)
        this.CartBtn = page.locator(locators.cartButton)
        this.continueBtn = page.locator(locators.continueShopping)
        this.CartProducts = page.locator(locators.cartProducts)
        this.GoToPageDetails = page.locator(locators.gotoDetails)
        this.BackToInventory = page.locator(locators.backToProducts)
    }

    async add2products(){
        for(let i = 0; i < 2; i++){
            await this.addToCartBtn.nth(i).click()
        }
        console.log('=======================================')
        console.log('2 products were added to cart')
    }

    async GotoCart(){
        await this.CartBtn.click()
        //await expect(this.CartProducts.first()).toBeVisible()
        for(let i = 0; i < 2; i++){
            await expect(this.CartProducts.nth(i)).toBeVisible()
        }
        console.log('=======================================')
        console.log('Selected products are present in cart')
    }

    async ValidateCOunt(){
        await this.continueBtn.click()
        //await expect(this.GoToPageDetails.first()).toBeVisible()
        await this.GoToPageDetails.nth(0).click()
        await expect(this.BackToInventory).toBeVisible()
        const count = parseInt(await this.cartBadge.innerText())
        console.log('=======================================')
        console.log('Cart count:', count)
        expect(count).toBe(2)
    }

    async validateRemoveBtn(){
        await this.BackToInventory.click()
        //await expect(this.addToCartBtn.first()).toBeVisible()
        for(let i = 0; i < 2; i++){
            await expect(this.removeBtn.nth(i)).toBeVisible()
        }
        console.log('=======================================')
        console.log('Remove buttons are visible for selected products')
        console.log('=======================================')
    }
}

module.exports = { CartPersistence }
