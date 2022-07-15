describe('Sample describe', () => {

  it.only('Sample name f.e. Should open home page and check url', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.wait(5000)
    // cy.get(selector '[input]').type("asd")
  })
})