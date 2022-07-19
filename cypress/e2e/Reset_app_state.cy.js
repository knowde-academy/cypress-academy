import MainMenu from "../../cypress/PageObject/MainMenu";

const menu= new MainMenu()

describe('Reset_app_state', () => {

    it ('Reset_app_state', ()=>{

        cy.login_standard()

        menu.add_item(4)
        menu.cart_badge().should('contain', '1')
        menu.get_button_remove_cart(4)

        menu.expand_list_options('reset')

        menu.cart_badge().should('not.exist')
        menu.go_cart()
        cy.get('[class="cart_item"]').should('not.exist')
        
        
        
    })
})