import MainMenu from "../../cypress/PageObject/MainMenu";
import Cart from "../../cypress/PageObject/Cart";
import { Data_test } from "../Datatest";

const menu= new MainMenu()
const cart= new Cart()

describe('Navigation', () => {
    

    it ('Back_to_products_by_name',()=> {

        cy.login_standard()

        menu.go_item(Data_test.item_0.number)
        .back_to_products()
        menu.url_inventory_is_good()
    })

    it ('Back_to_products_by_image',()=> {

        cy.login_standard()
        
        menu.go_item_by_img(Data_test.item_1.number)
        .back_to_products()
        menu.url_inventory_is_good()
    })

    it ('All_items_go_back',()=> {

        cy.login_standard()
        
        menu.go_item_by_img(Data_test.item_1.number)
        .expand_list_options('inventory')
        menu.url_inventory_is_good()
    })

    it ('Back_from_cart',()=> {

        cy.login_standard()
        
        menu.go_cart()
        cart.continue_shopping()
    })

    it ('About',()=> {

        cy.login_standard()

        menu.url_inventory_is_good()
        menu.expand_list_options('about')
        cy.url().should('eq','https://saucelabs.com/')
    })

    it ('Logout',()=> {

        cy.login_standard()

        menu.url_inventory_is_good()
        menu.expand_list_options('logout')
        cy.url().should('eq','https://www.saucedemo.com/')
        cy.login_without_all()
        .get('[data-test="error"]')
        .should('contain','Epic sadface: Username is required')
    })

    it ('Cancel_button_order_checkout',()=> {

        cy.login_standard()
        menu.add_item(Data_test.item_4.add)
        .go_cart()
        cart.checkout()
        cart.cancel_first_step()
    })


    it ('Cancel_button_order_summary',()=> {

        cy.login_standard()
        menu.add_item(Data_test.item_4.add)
        .go_cart()
        cart.checkout()
        cart.type_default()
        .continue_checkout()
        cart.cancel_second_step()

    })

    it ('Back_to_home',()=> {

        cy.login_standard()
        menu.add_item(Data_test.item_4.add)
        .go_cart()

        cart.checkout()
        cart.type_default()
        .continue_checkout()

        cy.get('[data-test="finish"]').click()
        cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')

        menu.back_to_products()
        menu.url_inventory_is_good()
        

    })

    it ('Go_to_products_details_from_summary',()=> {

        cy.login_standard()
        menu.add_item(Data_test.item_4.add)
        .go_cart()

        cart.checkout()

        cart.type_default()
        .continue_checkout()

        menu.get_item_title_link(Data_test.item_4.number).click()
        menu.check_item_url(Data_test.item_4.number)

        menu.check_title_in_details(Data_test.item_4.name)

    })
})