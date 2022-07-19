import MainMenu from "../../cypress/PageObject/MainMenu";
import {img_numbers_board} from "../../cypress/Datatest";
const menu= new MainMenu()

describe('Add_to_cart', () => {
    

    it ('Add_to_cart_menu_one_element',()=> {

        cy.login_standard()
        menu.add_item(4)
        menu.get_button_remove_cart(4)
        menu.cart_badge().should('have.text','1')
    })


    it ('Add_to_cart_menu_multiple_elements',()=> {

        cy.login_standard()

        img_numbers_board.forEach((nr)=>{

        const num=nr+1
        menu.add_item(nr)
        menu.get_button_remove_cart(nr)
        menu.cart_badge().should('have.text',num)
        })
    })


    it ('Add_to_cart_details_one_element',()=> {

        cy.login_standard()
        menu.go_item(0)
        menu.add_item(0)
        menu.get_button_remove_cart(0)
        menu.cart_badge().should('have.text','1')
    })


    it ('Add_to_cart_details_multiple_elements',()=> {

        cy.login_standard()

        img_numbers_board.forEach((nr)=>{

        const num=nr+1

        menu.go_item(nr)
        menu.add_item(nr)
        menu.get_button_remove_cart(nr)
        menu.cart_badge().should('have.text',num)
        cy.go('back')
    })
})

    it.only ('Add_to_cart_check_cart',()=> {

        cy.login_standard()

        menu.add_item(4)
        menu.add_item(0)

        menu.go_cart()
        menu.check_title(4)
        menu.check_title(0)
    })
})