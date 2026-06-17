const{Given, Then, When} = require('@cucumber/cucumber')
const{ProductSorting} = require('../pages/ProductSortingFunctionality.page')

let sort

Given('I open demosite to check sort Functionality', async function(){
    sort = new ProductSorting(this.page)

})

When('I extract the all names and prices of the products', async function(){
    this.AllProducts = await sort.extractProducts()
    //console.log(this.AllProducts)
})

When('I click on the sorting options one by one', async function(){
    await sort.verifySorting('za')
})

Then('I compare them according to the stored list earlier', async function(){
    console.log('verification completed')
})