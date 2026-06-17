const { expect } = require('@playwright/test')
const locators = require('../locators/InvalidLoginScenarios.locators')
const baseurl = require('../test-data/urls')

class InvalidLoginSenario{
    constructor(page){
        this.page = page
        this.Uname = page.locator(locators.userName)
        this.Password = page.locator(locators.password)
        this.loginBtn = page.locator(locators.loginButton)
        this.errorMessage = page.locator(locators.errorMSG)
        this.errorBtn = page.locator(locators.errorButton)
    }
    async Login(username, password){
        await this.page.goto(baseurl['baseURL'])
        await this.Uname.fill(username)
        await this.Password.fill(password)
        await this.loginBtn.click()
    }
    async ErrorMessage(){
        const msg = await this.errorMessage.innerText()
        expect(this.errorMessage).toBeVisible()
        console.log('========================================================')
        console.log('Error message => ',msg)
    }
    async CloseError(){
        await this.errorBtn.click()
    }
}
module.exports = {InvalidLoginSenario}