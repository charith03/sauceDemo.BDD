const {Given, When, Then} = require('@cucumber/cucumber')
const {LogoutFunction} = require('../pages/LogoutFunctionality.page')

let menu

Given('I navigate to the SauceDemo site',async function(){
    menu = new LogoutFunction(this.page)
})

When('I add 2 items to the cart',async function(){
    await menu.addItems()
})

When('I open the menu and capture all available options',async function(){
    await menu.MenuContainer()
})

When('I click on Reset App and verify the cart badge is cleared',async function(){
    await menu.ResetAPP()
})

Then('I open the menu again, click Logout, then try accessing the inventory page URL',async function(){
    await menu.Logout()
})

Then('verify the previous session is not accessible', async function(){
    console.log('=========================================')
    console.log('the previous session is not accessible')
})