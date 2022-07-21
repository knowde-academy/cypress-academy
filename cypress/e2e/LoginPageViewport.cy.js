const sizes = ['iphone-6', 'ipad-2', 'iphone-3']

describe('Logo', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    sizes.forEach((size) => {
      it(`Test case T-01 (Check results when valid username and password is entered) on ${size}`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1])
        } else {
          cy.viewport(size)
        }
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        
      })
      it(`Test case T-02 (Check results when not valid username and password is entered) on ${size}`, () => {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
          } else {
            cy.viewport(size)
          }
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
      })
      it(`Test case T-03 (Check results when is entered blocked user username and password) on ${size}`, () => {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
          } else {
            cy.viewport(size)
          }
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
    it(`Test case T-04 (Verify the time taken to log in with valid username and password) on ${size}`, () => {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
          } else {
            cy.viewport(size)
          }
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    it(`Test case T-05 (Check results when username and password is blank) on ${size}`, () => {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
          } else {
            cy.viewport(size)
          }
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    })
    it(`Test case T-06 (Check results when username is blank) on ${size}`, () => {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
          } else {
            cy.viewport(size)
          }
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')     
    })
    it(`Test case T-07 (Check results when password is blank) on ${size}`, () => {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
          } else {
            cy.viewport(size)
          }
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required') 
    })
    it(`Test case T-08 (Check results after closing information about wrong password) on ${size}`, () => {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])
          } else {
            cy.viewport(size)
          }
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_saucee')
        cy.get('[data-test="login-button"]').click()
        cy.get('.error-button').click()
        cy.get('.error-button').should('not.exist')
    })
    })
  })