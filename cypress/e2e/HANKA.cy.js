 /// <reference types="cypress" />


//describe('Login Standard User', function () {
it('TC-001 Open website, type and login as Standard User', function() { 
  cy.visit('/')
  cy.get('[data-test="username"]')
    .type('standard_user')
    .should('have.value', 'standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
    .should('have.value', 'secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
  cy.url().should('include', '/inventory.html')
})

//describe('Login Blocked User', function () {
it('TC-002 Open website, type and login as Blocked User', function() {   
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
it('TC-003 Open website, type and login as Problem User', function() {    
  cy.visit('/')
  cy.get('[data-test="username"]')
    .type('problem_user')
    .should('have.value', 'problem_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
    .should('have.value', 'secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
  cy.url().should('include', '/inventory.html')
})

//describe('Login Performance Glitch User', function () {
it('TC-004 Open website, type and login as Performance Glitch User', function() {   
  cy.visit('/')
  cy.get('[data-test="username"]')
    .type('performance_glitch_user')
    .should('have.value', 'performance_glitch_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
    .should('have.value', 'secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
  cy.url().should('include', '/inventory.html')
})

//describe('Negative veryfication of Login Page - bad username', function () { 
it('TC-005a Negative veryfication of Login Page', function () { 
  cy.visit('/')
  cy.get('[data-test="username"]')   //logowanie użytkownikiem, którego nie ma w bazie
    .type('other_user')
    .should('have.value', 'other_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
    .should('have.value', 'secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
  cy.get('[data-test="error"]')  
    .should('contain', 'Epic sadface:')
})  

it('TC-005b Negative veryfication of Login Page - bad password', function () { 
  cy.visit('/')
  cy.get('[data-test="username"]')  //logowanie użytkownikiem, który jest w bazie, ale hasło jest nieprawidłowe
    .type('standard_user')
    .should('have.value', 'standard_user')
  cy.get('[data-test="password"]')
    .type('spicy_sauce')
    .should('have.value', 'spicy_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
  cy.get('[data-test="error"]')  
    .should('contain', 'Epic sadface:')
})

//describe('Scroll page', function () { 
it('TC-006 Scroll page', function() {   
  cy.visit('/')
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  

  cy.get('footer').scrollIntoView()  
  cy.get('.footer_robot').should('be.visible')   

  cy.get('head').scrollIntoView()  
  cy.get('.header_label').should('be.visible') 
})

//describe('Sort by name asc', function () { 
it('TC-007 Sort by name asc', function() {  
  cy.visit('/')
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  

  cy.get('[data-test="product_sort_container"]')
    .select('Name (A to Z)')          
  cy.get('[data-test="product_sort_container"]') 
    .should('have.value', 'az')
})

//describe('Sort by name desc', function () { 
it('TC-008 Sort by name desc', function() {   
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()     

  cy.get('[data-test="product_sort_container"]')
    .select('Name (Z to A)')           
  cy.get('[data-test="product_sort_container"]') 
    .should('have.value', 'za')  
})

//describe('Sort by price asc', function () { 
it('TC-009 Sort by price asc', function() { 
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]') 
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  

  cy.get('[data-test="product_sort_container"]')
    .select('Price (low to high)')          
  cy.get('[data-test="product_sort_container"]')   
    .should('have.value', 'lohi')
})

//describe('Sort by price desc', function () { 
it('TC-010 Sort by price desc', function() {   
  cy.visit('/')
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()      
  cy.get('[data-test="product_sort_container"]')
    .select('Price (high to low)')         
  cy.get('[data-test="product_sort_container"]')   
    .should('have.value', 'hilo')  
})

//describe('Add product to cart from list view', function () {
it('TC-011 Add product to cart from list view', function() { 
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
it('TC-012 Add product to cart from product view', function() {   
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
it('TC-013 Remove product from cart', function() {   
  cy.visit('/')
  cy.get('[data-test="username"]') 
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

//describe('View products in the shopping cart', function () {
it('TC-014 Browsing products in the shopping cart', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  
      
  cy.get('footer').scrollIntoView().should('be.visible')   
  cy.get('head').scrollIntoView().title().should('include', 'Swag Labs')
})

//describe('Order', function () {   
it('TC-015 Order', function () {
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
    
  cy.get('[data-test="checkout"]')
    .click()
  cy.url().should('include', 'https://www.saucedemo.com/checkout-step-one.html') 

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

//describe('Reset application', function () {   
it('TC-016 Reset application', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()    

  cy.get('#react-burger-menu-btn')
    .click()
  cy.get('#reset_sidebar_link')
    .click()
  cy.get('.bm-item-list').should('be.visible')
})

//describe('Menu navigation, function () {
it('TC-017a Menu navigation - all items ', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()    

  cy.get('#react-burger-menu-btn')
    .click()
  cy.get('#inventory_sidebar_link')
    .click()
  cy.get('.bm-item-list').should('be.visible')
})

it('TC-017b Menu navigation - about ', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()   

  cy.get('#about_sidebar_link')
  cy.get('.bm-item-list').should('not.be.visible')
  })

it('TC-017c Menu navigation - logout ', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()  

  cy.get('#reset_sidebar_link')
  cy.get('.bm-item-list').should('not.be.visible')
  })

it('TC-017d Menu navigation - resetapp state ', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click()   

  cy.get('#logout_sidebar_link') 
  cy.get('.bm-item-list').should('not.be.visible')
  })

// //describe('Return from product to list', function () {
it('TC-018 Return from product to list', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click() 

  cy.get('#item_4_title_link > .inventory_item_name')  
    .click()
  cy.get('[data-test="back-to-products"]')    
    .click()
  cy.url().should('include', '/inventory.html')    
})  

//describe('Cart navigation, function () {
it('TC-019a Cart navigation - return to inventory', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click() 

  cy.get('.shopping_cart_link')   
    .click()
  cy.url().should('include', '/cart.html') 
  cy.get('[data-test="continue-shopping"]')
    .click()
  cy.url().should('include', '/inventory.html')        
})

it('TC-019b Cart navigation - checkout ', function () {
   cy.visit('/')  
   cy.get('[data-test="username"]')
     .type('standard_user')
   cy.get('[data-test="password"]')
     .type('secret_sauce')
   cy.get('[data-test="login-button"]')  
     .click() 
  
   cy.get('.shopping_cart_link')   
     .click()
   cy.url().should('include', '/cart.html') 
   cy.get('[data-test="checkout"]')
     .click()
   cy.url().should('include', '/checkout-step-one.html')        
})

//describe('Social media navigation', function () {
it('TC-020a Social media navigation - Twitter', function () {
   cy.visit('/')  
   cy.get('[data-test="username"]')
     .type('standard_user')
   cy.get('[data-test="password"]')
     .type('secret_sauce')
   cy.get('[data-test="login-button"]')  
     .click() 
 
   cy.get('.social_twitter > a').scrollIntoView().should('be.visible') 
})

it('TC-020b Social media navigation - Facebook', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click() 

  cy.get('.social_facebook > a').scrollIntoView().should('be.visible') 
})

it.only('TC-020c Social media navigation - LinkedIn', function () {
  cy.visit('/')  
  cy.get('[data-test="username"]')
    .type('standard_user')
  cy.get('[data-test="password"]')
    .type('secret_sauce')
  cy.get('[data-test="login-button"]')  
    .click() 

  cy.get('.social_linkedin > a').scrollIntoView().should('be.visible') 
})