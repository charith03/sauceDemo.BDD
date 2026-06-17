const { Given, When, Then } = require('@cucumber/cucumber')
const { RemoveFunctionality } = require('../pages/RemoveProductFunctionality.page')
const locators = require('../locators/RemoveProductFunctionality.locators')
const { expect } = require('@playwright/test')

let cartItem
let storedProducts = []

Given('I login in to the demo site', async function () {
    cartItem = new RemoveFunctionality(this.page)
})


When('I extract product names, prices and store them in list', async function () {
    storedProducts = await cartItem.getProducts()

})


When('I add 3 products into cart', async function () {
    await cartItem.addProducts()
})


When('I move to cart page', async function () {
    await cartItem.goTOCart()
})


When('I Compare cart product details with stored data', async function () {

    const cartProducts = this.page.locator(locators.productName)
    const cartPrices = this.page.locator(locators.productPrice)

    const count = await cartProducts.count()
    console.log("==================================================")
    console.log("added to cart products: ")

    for (let i = 0; i < count; i++) {
        const name = await cartProducts.nth(i).innerText()
        const price = await cartPrices.nth(i).innerText()
        console.log('Cart Product: ',  name)
        console.log('Cart Price: ', price)
        const match = storedProducts.find(function(p) {
            return p.name === name && p.price === price
        })
        expect(match, `Product mismatch: ${name}`).toBeTruthy()
        }
        console.log("==================================================")
        console.log("Cart matches inventory data")

})

When('I remove one product from cart', async function () {
    await cartItem.RemoveProduct()
})


When('I verify cart count decreases and removed product is no longer displayed', async function () {
    const cartProducts = this.page.locator(locators.productName)
    const count = await cartProducts.count()
    console.log("==================================================")

    console.log(`Updated cart count: ${count}`)
    console.log("Product removed successfully")
    await expect(count).toBe(2)
    console.log("==================================================")

})


Then('Cart details match inventory data and product removal works correctly', async function () {
    console.log("Test completed successfully")
})