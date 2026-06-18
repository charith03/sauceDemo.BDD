const locators = require('../locators/CheckoutFlowAndPrice.locators')
const baseurl = require('../test-data/urls')
const { expect } = require('@playwright/test')



class CheckOutFlow{
    constructor(page){
        this.page = page
        this.prices = page.locator(locators.productPrice)
        this.addCART = page.locator(locators.addToCArt)
        this.CartBtn = page.locator(locators.cartButton)
        this.checkOUTBtn = page.locator(locators.checkoutButton)
        this.ContinueBtn = page.locator(locators.continueButton)
        this.ErrorMsg = page.locator(locators.errorMSG)
        this.closeError = page.locator(locators.closeError)
        this.Fname = page.locator(locators.FristName)
        this.Lname = page.locator(locators.LastName)
        this.postalCode = page.locator(locators.postalCode)
        this.subTotal = page.locator(locators.SubTotal)
        this.taxAmount = page.locator(locators.TaxAmount)
        this.finalTotal = page.locator(locators.FinalTotal)
        this.FinishBtn = page.locator(locators.finishButton)
        this.validate = page.locator(locators.textValidation)
    }
    async addProducts(){
        for(let i=0; i<2; i++){
            await this.addCART.nth(i).click()
            //await this.page.waitForTimeout(2000)
        }
    }
    async openCart(){
        await this.CartBtn.click()
    }
    async goToCheckOUT(){
        await this.checkOUTBtn.click()
    }
    async captureError(){
        await this.ContinueBtn.click()
        const message = await this.ErrorMsg.innerText()
        console.log('===============================================')
        console.log('Cpatured error message =>',message)
        await this.closeError.click()
    }
    async FillDetails(){
        await this.Fname.fill('charan')
        //await this.page.waitForTimeout(2000)
        await this.Lname.fill('sai')
        //await this.page.waitForTimeout(2000)
        await this.postalCode.fill('810021')
        //await this.page.waitForTimeout(2000)
        await this.ContinueBtn.click()
    }
    async calculatePrice(){
        const prices = await this.prices.allTextContents()
        console.log('===============================================')
        console.log('extracted products prices: ',prices)
        console.log('===============================================')
        let sum = 0
        for (let price of prices) {
            sum += parseFloat(price.replace('$', ''))
        }

}

module.exports = {CheckOutFlow}