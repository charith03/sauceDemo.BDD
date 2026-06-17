const {Given, When, Then} = require('@cucumber/cucumber')
const {CheckOutFlow} = require('../pages/CheckoutFlowAndPrice.page')
const {expect} = require('@playwright/test')

let checkOut

Given('I open the sauce page', async function(){
    checkOut = new CheckOutFlow(this.page)
})

When('I logged in and added 2 products', async function(){
    await checkOut.addProducts()
    await checkOut.openCart()
    await checkOut.goToCheckOUT()
})

When('I clicked continue button without filling the details and capturethe error message', async function(){
    await checkOut.captureError()
})

When('I fill the details for Checkout',async function(){
    await checkOut.FillDetails()
})

Then('I extract the selected products prices and sum them', async function(){
    await checkOut.calculatePrice()
})

Then('I click on finish', async function(){
    await checkOut.finishOrder()
})