import MainMenu from "../../cypress/PageObject/MainMenu";

const menu= new MainMenu()

describe('Order', () => {
    

    // it ('Order_no_products_in_cart',()=> {
    //     cy.login_standard()
    //     cy.get('[class="shopping_cart_link"]').click()
    //     cy.get('[data-test="checkout"]').click()

    //     ////////Does it make sense to do a positive 
    //     ///test when I shouldn't be able to click the "Checkout" 
    //     /////button when there are no items in the cart?
    //})

    it ('Order_no_name',()=> {
        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[data-test="checkout"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('[data-test="lastName"]').type('Kowalski')
        cy.get('[data-test="postalCode"]').type('15-100')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', "Error: First Name is required")
        

    })

    it ('Order_no_last_name',()=> {
        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[data-test="checkout"]').click()
        
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('[data-test="firstName"]').type('Jan')
        cy.get('[data-test="postalCode"]').type('15-100')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', "Error: Last Name is required")


    })

    
    it ('Order_no_postal_code',()=> {
        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[data-test="checkout"]').click()
        
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('[data-test="firstName"]').type('Jan')
        cy.get('[data-test="lastName"]').type('Kowalski')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', "Error: Postal Code is required")


    })

    it ('Order_no_data',()=> {
        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[data-test="checkout"]').click()
        
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', "Error: First Name is required")


    })

    it ('Order_succes',()=> {
        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[data-test="checkout"]').click()
        
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        cy.get('[data-test="firstName"]').type('Jan')
        cy.get('[data-test="lastName"]').type('Kowalski')
        cy.get('[data-test="postalCode"]').type('15-100')
        cy.get('[data-test="continue"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')

        cy.get('[data-test="finish"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        cy.get('[class="complete-header"]').should('contain','THANK YOU FOR YOUR ORDER')


    })

    it ('Correct_content_of_the_cart',()=> {
        
        const price=29.99
        const tax=2.40
        const total=price+tax
        
        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[data-test="checkout"]').click()
        
        cy.get('[data-test="firstName"]').type('Jan')
        cy.get('[data-test="lastName"]').type('Kowalski')
        cy.get('[data-test="postalCode"]').type('15-100')
        cy.get('[data-test="continue"]').click()

        cy.get('[id="item_4_title_link"]').should('exist').children().should('contain', 'Sauce Labs Backpack')
        cy.get('[class="cart_quantity"]').should('contain', '1')

        cy.get('[class="summary_subtotal_label"]').should('contain', price)
        cy.get('[class="summary_tax_label"]').should('contain', tax)
        cy.get('[class="summary_total_label"]').should('contain', total)
    })

    it ('Reset_cart_after_order',()=> {

        cy.login_standard()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[data-test="checkout"]').click()
        
        cy.get('[data-test="firstName"]').type('Jan')
        cy.get('[data-test="lastName"]').type('Kowalski')
        cy.get('[data-test="postalCode"]').type('15-100')
        cy.get('[data-test="continue"]').click()


        cy.get('[data-test="finish"]').click()
        menu.back_to_products()
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist').should('contain','Add to cart')
        

    })
})