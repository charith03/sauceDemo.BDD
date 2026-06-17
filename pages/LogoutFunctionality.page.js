const { expect } = require('@playwright/test')
const locators = require('../locators/LogoutFunctionality.locators')

class LogoutFunction {
    constructor(page) {
        this.page = page
        this.MenuBtn = page.locator(locators.menuButton)
        this.MenuOpt = page.locator(locators.MenuOption)
        this.addToCART = page.locator(locators.addtocart)
        this.cartBadge = page.locator(locators.cartBadge)
        this.ResetappBtn = page.locator(locators.resetAPPButton)
        this.LogoutBtn = page.locator(locators.logoutButton)
        this.closeMENU = page.locator(locators.closeMenu)
        this.captureERROR = page.locator(locators.error)
        this.rmvBtn = page.locator(locators.removeButton)
    }

    async addItems() {
        for (let i = 0; i < 2; i++) {
            await this.addToCART.nth(i).click()
        }
        console.log('2 products were added to cart')
        const count = parseInt(await this.cartBadge.innerText())
        console.log('=======================================')
        console.log('verified Cart count:', count)
        expect(count).toBe(2)
    }

    async MenuContainer() {
        await this.MenuBtn.click()
        const allOptions = []
        const count = await this.MenuOpt.count()
        for (let i = 0; i < count; i++) {
            const option = await this.MenuOpt.nth(i).innerText()
            allOptions.push(option)
        }
        expect(allOptions.length).toBe(4)
        console.log('=======================================')
        console.log('validated that the menu contains 4 options')
        console.log(allOptions)
        return allOptions
    }

    async ResetAPP() {
        await this.ResetappBtn.click()
        await this.closeMENU.click()
        await expect(this.cartBadge).toHaveCount(0)
        for (let i = 0; i < 2; i++) {
            await expect(this.rmvBtn.nth(i)).toBeVisible()
        }
        console.log('=======================================')
        console.log('Cart reset successfully')
        console.log('=======================================')
        console.log("cart count set to 0 but remove button is not set to 'add to cart' button")
        await this.page.reload()
        console.log('=======================================')
        console.log('the page is reloaded, now the remove button changed to add to cart button')
    }

    async Logout() {
        await this.MenuBtn.click()
        await this.LogoutBtn.click()
        //await expect(this.page).toHaveURL('https://www.saucedemo.com/')
        await this.page.goto('https://www.saucedemo.com/inventory.html')
        await expect(this.captureERROR).toBeVisible()
        const errorMSG = await this.captureERROR.innerText()
        console.log('=======================================')
        console.log(errorMSG)
        await this.page.goBack()
        await expect(this.page).toHaveURL('https://www.saucedemo.com/')
    }
}


module.exports = { LogoutFunction }