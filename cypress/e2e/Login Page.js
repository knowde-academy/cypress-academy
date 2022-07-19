 /// <reference types="cypress" />
class LoginPage {
  navigate () {
       cy.visit('/')
  }

    enterLogin {
    cy.get('[data-test="username"]')
      .type('standard_user')
      .should('have.value', 'standard_user')
    }

    enterPassword {
    cy.get('[data-test="password"]')
      .type('secret_sauce')
      .should('have.value', 'secret_sauce')
    }

    submit {
    cy.get('[data-test="login-button"]')  
      .click()  
      .title().should('include', 'Swag Labs')
    }  
}
export default LoginPage