// const locators = require('../locators/LoginAndInventoryDetails.locators')
// const baseurl = require('../test-data/urls')
// const creds = require('../test-data/credentials')

// class LoginAndInventory{
//     constructor(page){
//         this.page = page
//         this.Uname = page.locator(locators.userName)
//         this.password = page.locator(locators.password)
//         this.LoginButton = page.locator(locators.loginButton)
//         this.prodNames = page.locator(locators.productsName)
//         this.prodPrices = page.locator(locators.productPrice)
//         this.prodDescription = page.locator(locators.productDescription)
//         this.addTOCART = page.locator(locators.addToCArt)
//     }

//     async LoginPage(username, password){
//         await this.page.goto(baseurl["baseURL"])
//         await this.Uname.fill(creds.username)
//         await this.password.fill(creds.pass)
//         await this.LoginButton.click()
//     }

//     async InventoryPage(){
//         const count = await this.prodDescription.count()
//         console.log('total products: ', count)
//     }
// }

// module.exports = {LoginAndInventory}