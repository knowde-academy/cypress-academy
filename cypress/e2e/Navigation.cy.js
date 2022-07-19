import MainMenu from "../../cypress/PageObject/MainMenu";

const menu= new MainMenu()

describe('Navigation', () => {
    

    it ('Back_to_products_by_name',()=> {

        cy.login_standard()

        menu.get_item_title_link('0').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory-item.html?id=0')
        menu.back_to_products()
        menu.url_inventory_is_good()

    })

    it ('Back_to_products_by_image',()=> {

        cy.login_standard()
        
        cy.get('[id="item_1_img_link"]').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory-item.html?id=1')
        menu.back_to_products()
        menu.url_inventory_is_good()

    })

    it ('All_items_go_back',()=> {

        cy.login_standard()
        
        cy.get('[id="item_1_img_link"]').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory-item.html?id=1')
        menu.expand_list_options('inventory')
        menu.url_inventory_is_good()

    })

    it ('Back_from_cart',()=> {

        cy.login_standard()
        
        menu.go_cart()
        cy.get('[data-test="continue-shopping"]').click()
        menu.url_inventory_is_good()

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
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        menu.go_cart()
        cy.get('[data-test="checkout"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('[data-test="cancel"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')


    })


    it ('Cancel_button_order_summary',()=> {

        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        menu.go_cart()

        cy.get('[data-test="checkout"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')

        cy.get('[data-test="firstName"]').type('Jan')
        cy.get('[data-test="lastName"]').type('Kowalski')
        cy.get('[data-test="postalCode"]').type('15-100')
        cy.get('[data-test="continue"]').click()

        cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html')

        cy.get('[data-test="cancel"]').click()
        menu.url_inventory_is_good()

    })

    it ('Back_to_home',()=> {

        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        menu.go_cart()

        cy.get('[data-test="checkout"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')

        cy.get('[data-test="firstName"]').type('Jan')
        cy.get('[data-test="lastName"]').type('Kowalski')
        cy.get('[data-test="postalCode"]').type('15-100')
        cy.get('[data-test="continue"]').click()

        cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html')

        cy.get('[data-test="finish"]').click()
        cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')

        menu.back_to_products()
        menu.url_inventory_is_good()
        

    })

    it ('Go_to_products_details_from_summary',()=> {

        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        menu.go_cart()

        cy.get('[data-test="checkout"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')

        cy.get('[data-test="firstName"]').type('Jan')
        cy.get('[data-test="lastName"]').type('Kowalski')
        cy.get('[data-test="postalCode"]').type('15-100')
        cy.get('[data-test="continue"]').click()
        cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html')

        menu.get_item_title_link(4).click()
        menu.check_item_url(4)

        menu.check_title_in_details(4)

    })
})