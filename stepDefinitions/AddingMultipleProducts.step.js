const {Given, When, Then} = require('@cucumber/cucumber')
const {AddMultipleProducts} = require('../pages/AddingMultipleProducts.page')
const locators = require('../locators/AddingMultipleProducts.locators')
const {expect} = require('@playwright/test')

let multipleProducts

Given('I login into the SauceDemo site', async function(){
    multipleProducts = new AddMultipleProducts(this.page)
})

When('I extract the product names store them in list', async function(){
    await multipleProducts.ExtractProducts()
})

When('I add first 3 products', async function(){
    await multipleProducts.addProducts()
})

When('I verify the addtocart changed to remove button', async function(){
    for(let i=0; i<3; i++){
        const removeBtn = await this.page.locator(locators.removeButton).nth(i)
        await expect(removeBtn).toBeVisible()
    }
    console.log('-------------------------------------------------')
    console.log("the 'remove' button is visible")
    console.log('-------------------------------------------------')

})

When('I verify the cart badge shows count as 3', async function(){
    const cartCount = await this.page.locator(locators.cartBadge)
    await expect(cartCount).toHaveText('3')
    console.log('cart number matched the selected products number')
    console.log('-------------------------------------------------')

    
})

Then('I will refresh the page and verify cart data is retained', async function(){
    await multipleProducts.reloadPage()
    
})
