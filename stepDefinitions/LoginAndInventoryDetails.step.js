const {Given, When, Then} = require('@cucumber/cucumber')
const {LoginAndInventory} = require('../pages/LoginAndInventoryDetails.page')
const locators = require('../locators/LoginAndInventoryDetails.locators')
const baseURL = require('../test-data/urls')
const {expect} = require('@playwright/test')

let saucedemopage

Given('I login to SauceDemo and verify inventory page', async function(){
    saucedemopage = new LoginAndInventory(this.page)
    await saucedemopage.LoginPage()
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log("URL matched")

})

When('I view the inventory', async function(){
    await saucedemopage.InventoryPage()
    
})

Then('all products should have name, description, price, and Add to Cart', async function () {

    const products = this.page.locator(locators.products);
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        const prodNames = this.page.locator(locators.productsName).nth(i);
        const prodPrices = this.page.locator(locators.productPrice).nth(i);
        const prodDescription = this.page.locator(locators.productDescription).nth(i);
        const addToCart = this.page.locator(locators.addToCArt).nth(i);

        await expect(prodNames).toBeVisible();
        await expect(prodDescription).toBeVisible();
        await expect(prodPrices).toBeVisible();
        await expect(addToCart).toBeVisible();
    }
    console.log('each product contains a name, description, price, and Add to Cart button.')
})