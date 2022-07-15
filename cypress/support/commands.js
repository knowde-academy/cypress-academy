// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username,password)=>{
        cy.get('[data-test="username"]')
        .type(username)
        .get('[data-test="password"]')
        .type(password)
        .get('[data-test="login-button"]')
        .click()
}
)

Cypress.Commands.add('login_without_username', (password)=>{
        cy.get('[data-test="password"]')
        .type(password)
        .get('[data-test="login-button"]')
        .click()
}
)

Cypress.Commands.add('login_without_password', (username)=>{
        cy.get('[data-test="username"]')
        .type(username)
        .get('[data-test="login-button"]')
        .click()
}
)

Cypress.Commands.add('login_without_all', (username)=>{
        cy.get('[data-test="login-button"]')
        .click()
}
)


// mierzenie czasu

// cy.wrap(performance.now()).as('time');
// cy.get('[data-test="login-button"]').click();
// cy.wait(5000)
// cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
// cy.wrap(performance.now).then(now => {
//     cy.get('@time').then(time => {
//         console.log(now - time);
//     })
// })