import MainMenu from "../../cypress/PageObject/MainMenu";
import {Data_test} from "../../cypress/Datatest";

const menu= new MainMenu();
const elements=Object.values(Data_test);

describe('Add_to_cart', () => {
    

    it ('Add_to_cart_menu_one_element',()=> {

        cy.login_standard()
        menu.add_item(Data_test.item_4.add)
        .get_button_remove_cart(Data_test.item_4.remove)
        menu.cart_badge().should('have.text','1')
    })


    it ('Add_to_cart_menu_multiple_elements',()=> {

        cy.login_standard()

        elements.forEach((item)=>{
        const num=item.number+1
        menu.add_item(item.add)
        .get_button_remove_cart(item.remove)
        menu.cart_badge().should('have.text',num)
        })
    })


    it ('Add_to_cart_details_one_element',()=> {

        cy.login_standard()
        menu.go_item(Data_test.item_0.number)
        .add_item(Data_test.item_0.add)
        .get_button_remove_cart(Data_test.item_0.remove)
        menu.cart_badge().should('have.text','1')
    })


    it ('Add_to_cart_details_multiple_elements',()=> {

        cy.login_standard()

        elements.forEach((item)=>{
            const num=item.number+1
            menu.go_item(item.number)
            .add_item(item.add)
            .get_button_remove_cart(item.remove)
            menu.cart_badge().should('have.text',num)
            cy.go('back')
        })
})

    it ('Add_to_cart_check_cart',()=> {

        cy.login_standard()
        menu.add_item(Data_test.item_4.add)
        .add_item(Data_test.item_0.add)
        .go_cart()
        menu.check_title(Data_test.item_4.number,Data_test.item_4.name)
        .check_title(Data_test.item_0.number,Data_test.item_0.name)
    })
})