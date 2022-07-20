/// <reference types = 'cypress' />

import LoginPage from "../support/PageObject/LoginPage"
import ShopPage from "../support/PageObject/ShopingPage"
import ProductPage from "../support/PageObject/ProductPage"
import CartPage from "../support/PageObject/CartPage"
import CheckoutPage from "../support/PageObject/CheckoutPage"
import StepTwo from "../support/PageObject/StepTwo"
import CompletePage from "../support/PageObject/CompletePage"
import Navigation from "../support/PageObject/Navigation"

describe('Test resetting page', function() {
    beforeEach(function() {
        cy.fixture('login').then(function(testdata) {
            this.testdata = testdata
        })
        cy.login('standard_user', 'secret_sauce')
    })
    it('T-01 (Verify reset app state button reset items in cart)', function() {
        const product = new ShopPage
        const cart = new CartPage
        const checkout = new CheckoutPage
        const steptwo = new StepTwo
        const complete = new CompletePage
        const navigation = new Navigation
        product.addToCart(3)
        navigation.resetPage()   
    })
})