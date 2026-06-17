Feature: SauceDemo E2E

@smoke
@valid
@inventory
Scenario: Login and validate products
    Given I login to SauceDemo and verify inventory page
    When I view the inventory
    Then all products should have name, description, price, and Add to Cart

@valid
@products
Scenario: Verify Adding Multiple Products to Cart
    Given I login into the SauceDemo site
    And I extract the product names store them in list
    And I add first 3 products
    And I verify the addtocart changed to remove button
    And I verify the cart badge shows count as 3
    Then I will refresh the page and verify cart data is retained

@valid
@remove
Scenario: Verify Cart Details and Remove Product Functionality
    Given I login in to the demo site
    And I extract product names, prices and store them in list
    And I add 3 products into cart
    And I move to cart page
    And I Compare cart product details with stored data
    And I remove one product from cart
    And I verify cart count decreases and removed product is no longer displayed
    Then Cart details match inventory data and product removal works correctly

@smoke
@invalidCreds
Scenario: Validate error messages for invalid login attempts
    Given I open the demosite
    And I enter multiple invalid usernames, password and click login button
    And I capture the error message
    Then I close the error message

@valid
@checkout
Scenario: Verify Complete Checkout Flow and Price Calculation
    Given I open the sauce page
    And I logged in and added 2 products
    And I clicked continue button without filling the details and capturethe error message
    And I fill the details for Checkout
    And I extract the selected products prices and sum them
    Then I click on finish

@smoke
@valid
@sorting
Scenario: Verify Product Sorting Functionality
    When I open demosite to check sort Functionality
    And I extract the all names and prices of the products
    And I click on the sorting options one by one
    Then I compare them according to the stored list earlier

@valid
@details
Scenario: Verify Product Details Page Navigation
    Given I open the page 
    When I select of the product and click on it
    And I will validate the details on the product page
    And I come back to the inventory page
    Then I check are all products were displayed or not

@valid
@persistence
Scenario: Verify Cart Persistence During Navigation
    Given I goto the page
    And I added 2 products
    And I click on cart button to navigate to it
    And I validate the count badge is correct or not
    Then I verify thele added products displat remove button or not

@valid
@cancel
Scenario: Verify Checkout Cancellation Flow
    Given I went to the site
    And I added two items in cart
    And I navigate to cart
    And I navigate to checkout and click cancel and verified the cartcount
    And I again navigate to checkout and filled checkout info and clicked cancel and verfied cart cout

@valid
@menu
Scenario: Verify Hamburger Menu, Reset App State, and Logout Functionality
    Given I navigate to the SauceDemo site
    And I add 2 items to the cart
    And I open the menu and capture all available options
    And I click on Reset App and verify the cart badge is cleared
    And I open the menu again, click Logout, then try accessing the inventory page URL 
    Then verify the previous session is not accessible