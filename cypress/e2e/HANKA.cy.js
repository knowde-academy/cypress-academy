 /// <reference types="cypress" />


//describe('Login Standard User', function () {
it('Open website, type and login as Standard User', function() {    //user
  cy.visit('/')

  cy.get('[data-test="username"]')
    .type('standard_user')
    .should('have.value', 'standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
    .should('have.value', 'secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
    .title().should('include', 'Swag Labs')
})

//describe('Login Blocked User', function () {
it('Open website, type and login as Blocked User', function() {      //blocked user
  cy.visit('/')

  cy.get('[data-test="username"]')  //wpisuje login
    .type('locked_out_user')
    .should('have.value', 'locked_out_user')
  cy.get('[data-test="password"]')     //wpisuje hasło
    .type('secret_sauce')
    .should('have.value', 'secret_sauce')
  cy.get('[data-test="login-button"]')     // klikam przycisk logowania
    .click()  
  cy.get('[data-test="error"]')       //sprawdzam czy pojawił się oczekiwany błąd (napis error)
    .should('contain', 'Epic sadface: Sorry, this user has been locked out.')
}) 

//describe('Login Problem User', function () {
it('Open website, type and login as Problem User', function() {     //problem user
  cy.visit('/')

  cy.get('[data-test="username"]')
    .type('problem_user')
    .should('have.value', 'problem_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
    .should('have.value', 'secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
    .title().should('include', 'Swag Labs')
})

//describe('Login Performance Glitch User', function () {
it('Open website, type and login as Performance Glitch User', function() {      //performance glitch user
  cy.visit('/')

  cy.get('[data-test="username"]')
    .type('performance_glitch_user')
    .should('have.value', 'performance_glitch_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
    .should('have.value', 'secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
    .title().should('include', 'Swag Labs')
})

//describe('Scroll page', function () { 
it('Scroll page', function() {    //scroll page
  cy.visit('/')

  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  

  cy.get('footer').scrollIntoView().should('be.visible')      //scroll do stopki

  cy.get('head').scrollIntoView().title().should('include', 'Swag Labs')   //scroll do nagłówka
})

//describe('Sort by name asc', function () { 
it('Sort by name asc', function() {    //sort by name asc
  cy.visit('/')
  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  

  cy.get('[data-test="product_sort_container"]')
    .select('Name (A to Z)')            //sort by name asc
  cy.get('[data-test="product_sort_container"]') 
    .should('have.value', 'az')
})

//describe('Sort by name desc', function () { 
it('Sort by name desc', function() {    //sort by name desc
  cy.visit('/')
    
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()     

  cy.get('[data-test="product_sort_container"]')
    .select('Name (Z to A)')            //sort by name desc
  cy.get('[data-test="product_sort_container"]') 
    .should('have.value', 'za')  
})

//describe('Sort by price asc', function () { 
it('Sort by price asc', function() {    //sort by price asc
  cy.visit('/')
    
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]') 
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  

  cy.get('[data-test="product_sort_container"]')
    .select('Price (low to high)')            //sort by price asc
  cy.get('[data-test="product_sort_container"]')   
    .should('have.value', 'lohi')
})

//describe('Sort by price desc', function () { 
it('Sort by price desc', function() {    //sort by price desc
  cy.visit('/')
    
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()      
  cy.get('[data-test="product_sort_container"]')
    .select('Price (high to low)')            //sort by price desc
  cy.get('[data-test="product_sort_container"]')   
    .should('have.value', 'hilo')  
})

//describe('Add product to cart from list view', function () {
it('Add product to cart from list view', function() { 
  cy.visit('/')
  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  

  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')   //add product to cart from list view
    .click()  

  cy.get('.shopping_cart_link')     //otwiera koszyk
    .click()
  cy.get('.cart_item_label')
    .should('contain', 'Backpack')
})

//describe('Add product to cart from product view', function () {
it('Add product to cart from product view', function() {    //add product to cart from product view
  cy.visit('/')
  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
    
  cy.get('#item_4_title_link > .inventory_item_name')  
    .click()
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')  
    .click()

  cy.get('.shopping_cart_link')     //otwiera koszyk
    .click()
  cy.get('.cart_item_label')
    .should('contain', 'Backpack')
})

//describe('Remove product from cart', function () {
it('Remove product from cart', function() {    //remove product from cart
  cy.visit('/')
  
  cy.get('[data-test="username"]')   //ogarnąć te logowanie w końcu
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
    
  cy.get('#item_4_title_link > .inventory_item_name')   //dodanie do koszyka
    .click()
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')  
    .click()

  cy.get('.shopping_cart_link')     //otwiera koszyk
    .click()
  cy.get('[data-test="remove-sauce-labs-backpack"]')
    .click()
  cy.get('.cart_list')
    .should('not.contain', 'Backpack')
})

//describe('Browsing products in the shopping cart', function () {
it('Browsing products in the shopping cart', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
      
  cy.get('footer').scrollIntoView().should('be.visible')     //scrollowanie w koszyku
  cy.get('head').scrollIntoView().title().should('include', 'Swag Labs')
})

//describe('Order', function () {       //składanie zamówienia
it('Order', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()    

  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')   //add product to cart from list view
    .click()  
  
  cy.get('.shopping_cart_link')     //otwiera koszyk
    .click()
  cy.get('.cart_item_label')
    .should('contain', 'Backpack')      
    
  cy.get('[data-test="checkout"]')    //klik checkout
    .click()
  cy.url().should('include', 'https://www.saucedemo.com/checkout-step-one.html')  //sprawdza, czy przeniosło na next page

  cy.get('[data-test="firstName"]')   //uzupełnienie formularza
    .type('Imie')
    .should('have.value', 'Imie')
  cy.get('[data-test="lastName"]')
    .type('Nazwisko')
    .should('have.value', 'Nazwisko') 
  cy.get('[data-test="postalCode"]')
    .type('2137')
    .should('have.value', '2137') 
  cy.get('[data-test="continue"]')
    .click()
  cy.url().should('include', 'https://www.saucedemo.com/checkout-step-two.html')
  cy.get('[data-test="finish"]') 
    .click()
  cy.url().should('include', 'https://www.saucedemo.com/checkout-complete.html')
})