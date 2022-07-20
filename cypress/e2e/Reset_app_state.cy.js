import MainMenu from "../../cypress/PageObject/MainMenu";
import { Data_test } from "../Datatest";

const menu= new MainMenu()

describe('Reset_app_state', () => {

    it ('Reset_app_state', ()=>{

        cy.login_standard()

        menu.add_item(Data_test.item_4.add)
        .cart_badge().should('contain', '1')
        menu.get_button_remove_cart(Data_test.item_4.remove)

        menu.expand_list_options('reset')

        menu.cart_badge().should('not.exist')
        menu.go_cart()
        cy.get('[class="cart_item"]').should('not.exist')
        
        
        
    })
})