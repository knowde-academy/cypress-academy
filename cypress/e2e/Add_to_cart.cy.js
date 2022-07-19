describe('Add_to_cart', () => {
    

    it ('Add_to_cart_menu_one_element',()=> {

        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','1')
    })


    it ('Add_to_cart_menu_multiple_elements',()=> {

        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','1')

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','2')

        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','3')

        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','4')

        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','5')

        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','6')
    })


    it ('Add_to_cart_details_one_element',()=> {

        cy.login_standard()
        cy.get('[id="item_0_title_link"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('contain','Remove')

        cy.get('[class="shopping_cart_badge"]').should('contain','1')


    })


    it ('Add_to_cart_details_multiple_elements',()=> {

        cy.login_standard()

        cy.get('[id="item_4_title_link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','1')
        cy.go('back')

        cy.get('[id="item_0_title_link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','2')
        cy.go('back')

        cy.get('[id="item_1_title_link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','3')
        cy.go('back')

        cy.get('[id="item_5_title_link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','4')
        cy.go('back')

        cy.get('[id="item_2_title_link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','5')
        cy.go('back')

        cy.get('[id="item_3_title_link"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('contain','Add to cart').click()
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').should('contain','Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain','6')

    })

    it ('Add_to_cart_check_cart',()=> {

        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[id="item_4_title_link"]').should('exist').children().should('contain', 'Sauce Labs Backpack')

    })

})