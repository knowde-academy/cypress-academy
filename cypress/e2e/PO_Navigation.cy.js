/// <reference types = 'cypress' />

import LoginPage from "../support/PageObject/LoginPage"
import ShopPage from "../support/PageObject/ShopingPage"
import ProductPage from "../support/PageObject/ProductPage"
import CartPage from "../support/PageObject/CartPage"
import CheckoutPage from "../support/PageObject/CheckoutPage"
import StepTwo from "../support/PageObject/StepTwo"
import CompletePage from "../support/PageObject/CompletePage"
import Navigation from "../support/PageObject/Navigation"
import Footer from "../support/PageObject/Footer"

describe('Test navigation on page', function() {
    beforeEach(function() {
        cy.fixture('login').then(function(testdata) {
            this.testdata = testdata
        })
        cy.login('standard_user', 'secret_sauce')
        const product = new ShopPage
        const cart = new CartPage
        const checkout = new CheckoutPage
        const steptwo = new StepTwo
        const complete = new CompletePage
        const navigation = new Navigation
        const footer = new Footer
        const item = new ProductPage
    })
    it('T-01 (Check results when clicking on menu button', function() {
        const navigation = new Navigation
        navigation.goToMenu()
    })
    it('T-02 (Check results when clicking on twitter icon', function() {
        const footer = new Footer
        footer.twitter()
    })
    it('T-03 (Check results when clicking on linkedin icon)', function() {
        const footer = new Footer
        footer.linkedin()
    })
    it('T-04 (Check results when clicking on facebook icon)', function() {
        const footer = new Footer
        footer.facebook()
    })
    it('T-05 (Check results when clicking on cart icon)', function() {
        const product = new ShopPage
        product.goToCart()
    })
    it('T-06 (Check "back to products" button")', function() {
        const product = new ShopPage
        const item = new ProductPage
        product.clickProductName(4)
        item.backToProduct()
    })
    it('T-07 (Check "All products" button in slide menu', function() {
        const navigation = new Navigation
        const product = new ShopPage
        product.clickProductName(0)
        navigation.goToMenu()
        .allProducts()
    })
    it('T-08 (Check "About" button in slide menu)', function() {
        const navigation = new Navigation
        navigation.goToMenu()
        .about()
    })
    it('T-09 (Check "logout" button in slide menu)', function() {
        const navigation = new Navigation
        navigation.goToMenu()
        .logout()
    })
})