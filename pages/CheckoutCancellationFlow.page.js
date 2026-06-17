const locators = require('../locators/CheckoutCancellationFlow.locators')
const {expect} = require('@playwright/test')

class CheckoutCancellation{
    constructor(page){
        this.page = page
        this.addToCART = page.locator(locators.addtocart)
        this.cartBadge = page.locator(locators.cartBadge)
        this.cartBtn = page.locator(locators.cartButton)
        this.checkBtn = page.locator(locators.checkoutButton)
        this.cancelBtn = page.locator(locators.cancelButton)
        this.ContinueBtn = page.locator(locators.continueButton)
        this.Fname = page.locator(locators.FristName)
        this.Lname = page.locator(locators.LastName)
        this.postalCode = page.locator(locators.postalCode)
    }
    async addItems(){
            for(let i = 0; i < 2; i++){
                await this.addToCART.nth(i).click()
            }
        console.log('=======================================')
        console.log('2 products were added to cart')
    }
    async GotoCart(){
        await this.cartBtn.click()
        console.log('=======================================')
        console.log('navigated to cart page')
    }
    async checkoutpage(){
        await this.checkBtn.click()
        console.log('=======================================')
        console.log('navigated to checkout page')
        await this.cancelBtn.click()
        console.log('=======================================')
        console.log('clicked on cancel button')
        const count = parseInt(await this.cartBadge.innerText())
        console.log('=======================================')
        console.log('verified Cart count:', count)
        expect(count).toBe(2)
    }
    async overViewPage(){
        await this.checkBtn.click()
        console.log('=======================================')
        console.log('again clicked on checkout button')
        console.log('=======================================')
        console.log('again navigated to checkout page')
        await this.Fname.fill('charan')
        await this.Lname.fill('sai')
        await this.postalCode.fill('810021')
        console.log('=======================================')
        console.log('filled the checkout information')
        await this.ContinueBtn.click()
        await this.cancelBtn.click()
        console.log('=======================================')
        console.log('again clicked on cancel from checkout overiew page')
         const count = parseInt(await this.cartBadge.innerText())
        console.log('=======================================')
        console.log('Again verified the Cart count:', count)
        expect(count).toBe(2)
        console.log('=======================================')
        console.log('the cart count remains same')
    }
}

module.exports = {CheckoutCancellation}