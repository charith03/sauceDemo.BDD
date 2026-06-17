import { test, expect } from '@playwright/test'

const {LoginAndInventory} = require('../pages/LoginAndInventoryDetails.page')

test('testcae1', async({page})=>{
  const loginpage = new LoginAndInventory(page)
  await page.goto('https://www.saucedemo.com/');
  await loginpage.LoginPage()
  await loginpage.InventoryPage()
})

// const locators = require('../locators/LoginAndInventoryDetails.locators')
// const baseurl = require('../test-data/urls')
// const creds = require('../test-data/credentials')

// class LoginAndInventory {
//     constructor(page) {
//         this.page = page
//         this.Uname = page.locator(locators.userName)
//         this.password = page.locator(locators.password)
//         this.prodNames = page.locator(locators.productsName)
//         this.prodPrices = page.locator(locators.productPrice)
//         this.prodDescription = page.locator(locators.productDescription)
//     }

//     async LoginPage() {
//         await this.page.goto(baseurl["baseURL"])
//         await this.Uname.fill(creds.username)
//         await this.password.fill(creds.pass)
//         await this.page.click('#login-button')
//     }

//     async InventoryPage() {
//         const productDetails = []
//         const count = await this.prodDescription.count()
//         console.log('Total products:', count)
//         for (let i = 0; i < count; i++) {
//             const name = await this.prodNames.nth(i).innerText() 
//             const price = await this.prodPrices.nth(i).innerText()
//             productDetails.push({
//                 Name: name,
//                 Price: price
//             })
//             console.log(`Item: ${name} , cost: ${price}`)
//         }
//         return productDetails
//     }
// }

// module.exports = { LoginAndInventory }