import MainMenu from "../../cypress/PageObject/MainMenu";

const menu= new MainMenu()

describe('Reset_app_state', () => {

    it ('Reset_app_state', ()=>{

        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        menu.cart_badge().should('contain', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove')

        menu.expand_list_options('reset')

        menu.cart_badge().should('not.exist')
        menu.go_cart()
        cy.get('[class="cart_item"]').should('not.exist')
        
        
        
    })
})