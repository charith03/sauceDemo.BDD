const {Given, Then, When} = require('@cucumber/cucumber')
const {ProductDetailsPage} = require('../pages/ProductDetailsPage.page')

let productPage

Given('I open the page', async function(){
    productPage = new ProductDetailsPage(this.page)
})

When('I select of the product and click on it', async function(){
    console.log('==============================================================')
    console.log(' =>  clicked on the product and navigating to details page')
})

When('I will validate the details on the product page', async function(){
    await productPage.validateDetails()
})

When('I come back to the inventory page', async function(){
    console.log('==============================================================')
    console.log('came back to inventory page')
})

Then('I check are all products were displayed or not', async function(){
    await productPage.InventoryPage()
})