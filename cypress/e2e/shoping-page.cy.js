describe('Shopping page', () => {
    beforeEach(function(){

        cy.visit('https://www.saucedemo.com/')
        cy.login('standard_user', 'secret_sauce')
    })
})