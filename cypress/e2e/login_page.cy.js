describe('Login Page', () => {
    beforeEach(function(){

        cy.visit('https://www.saucedemo.com/')
    })

    //Test case T-01
    it('Check results when valid username and password is entered', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

    })

    //Test case T-02

    it('Check results when not valid username and password is entered', () => {
        cy.get('[data-test="username"]').type('invalid_user')
        cy.get('[data-test="password"]').type('secret_saucee')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')

    })

    //Test case T-03

    it('Check results when is entered blocked user username and password', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    //Test case T-04

    it('Verify the time taken to log in with valid username and password', () => {
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

    })

    //Test case T-05

    it('Check results when username and password is blank', () => {
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')

    })

    //Test case T-06

    it('Check results when password is blank', () => {
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
        

    })

    //Test  case T-07

    it('Check results when username is blank', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
        

    })

    //Test case T-08

    it('Check results after closing information about wrong password', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_saucee')
        cy.get('[data-test="login-button"]').click()
        cy.get('.error-button').click()
    })
})
