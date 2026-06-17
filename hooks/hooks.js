const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber')
const { chromium } = require('playwright')
const { LoginAndInventory } = require('../pages/LoginAndInventoryDetails.page')
const creds = require('../test-data/credentials')

let browser
let context

setDefaultTimeout(60000)


Before(async function () {
    browser = await chromium.launch({ headless: false })
    context = await browser.newContext()
    this.page = await context.newPage()
})

Before({ tags: "@valid" }, async function () {
    const loginPage = new LoginAndInventory(this.page)
    await loginPage.LoginPage()
})

After(async function () {
    console.log("Closing browser...")
    console.log('******************NEW SCENARIO STARTS*********************')
    if (this.page) await this.page.close()
    if (context) await context.close()
    if (browser) await browser.close()
})