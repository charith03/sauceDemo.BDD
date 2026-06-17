const {Given, When, Then} = require('@cucumber/cucumber')
const {InvalidLoginSenario} = require('../pages/InvalidLoginScenarios.page')
const locators = require('../locators/InvalidLoginScenarios.locators')
const { expect } = require('@playwright/test')
const Invalidcreds = require('../test-data/InvalidCreds')


let creds

Given('I open the demosite', async function () {
    creds = new InvalidLoginSenario(this.page)
})

When('I enter multiple invalid usernames, password and click login button', async function () {
    for (const data of Invalidcreds) {
        console.log(`Testing with: ${data.username} / ${data.password}`)
        await creds.Login(data.username, data.password)
    }
})

When('I capture the error message', async function(){
    await creds.ErrorMessage()

})

Then('I close the error message', async function(){
    await creds.CloseError()

})