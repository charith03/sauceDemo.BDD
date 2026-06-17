const {Given, Then, When} = require('@cucumber/cucumber')
const {CheckoutCancellation} = require('../pages/CheckoutCancellationFlow.page')


let checkout

Given('I went to the site', async function(){
    checkout = new CheckoutCancellation(this.page)
})

When('I added two items in cart', async function(){
    await checkout.addItems()
})

When('I navigate to cart', async function(){
    await checkout.GotoCart()
})

When('I navigate to checkout and click cancel and verified the cartcount', async function(){
    await checkout.checkoutpage()
})

Then('I again navigate to checkout and filled checkout info and clicked cancel and verfied cart cout', async function(){
    await checkout.overViewPage()
})