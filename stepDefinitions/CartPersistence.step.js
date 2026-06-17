const {Given, When, Then} = require('@cucumber/cucumber')
const{CartPersistence} = require('../pages/CartPersistence.page')

let cart

Given('I goto the page', async function(){
    cart = new CartPersistence(this.page)
})

When('I added 2 products', async function(){
    await cart.add2products()
})

When('I click on cart button to navigate to it', async function(){
    await cart.GotoCart()
})

When('I validate the count badge is correct or not', async function(){
    await cart.ValidateCOunt()
})

Then('I verify thele added products displat remove button or not', async function(){
    await cart.validateRemoveBtn()
})