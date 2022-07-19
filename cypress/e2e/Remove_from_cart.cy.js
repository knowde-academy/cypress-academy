describe('Remove_from_cart', () => {

    it ('Remove_from_cart_in_menu_one_element', ()=>{

        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('contain','Add to cart')
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
    })


    ////////////////////////////////////////////////////////////////////////////////////


    it ('Remove_from_cart_in_menu_multiple_elements', ()=>{
        
        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()


        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_badge"]').should('contain','2')

        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('[class="shopping_cart_badge"]').should('contain','1')

        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
    })

    //////////////////////////////////////////////////////////////////////////////////////////

    it ('Remove_from_cart_in_details_one_element', ()=>{
        
        cy.login_standard()
        cy.get('[id="item_0_title_link"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()

        cy.get('[class="shopping_cart_badge"]').should('not.exist')
    })

    /////////////////////////////////////////////////////////////////////////////////////////////////

    it ('Remove_from_cart_in_details_multiple_elements', ()=>{

        cy.login_standard()

        cy.get('[id="item_4_title_link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.go('back')

        cy.get('[id="item_0_title_link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.go('back')

        cy.get('[id="item_1_title_link"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

        cy.go('back')




        cy.get('[id="item_4_title_link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_badge"]').should('contain','2')
        cy.go('back')

        cy.get('[id="item_0_title_link"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('[class="shopping_cart_badge"]').should('contain','1')
        cy.go('back')

        cy.get('[id="item_1_title_link"]').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
    })

    //////////////////////////////////////////////////////////////////////////////////////////////////

    it ('Remove_from_cart_in_cart_one_element', ()=>{

        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[class="inventory_item_name"]').should('contain','Sauce Labs Backpack')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove').click()
        cy.get('[class="cart_item"]').should('not.exist')

    })
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    it ('Remove_from_cart_in_cart_multiple_elements', ()=>{

        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[class="shopping_cart_link"]').click()

        cy.get('[class="inventory_item_name"]').eq(0).should('contain','Sauce Labs Backpack')
        cy.get('[class="inventory_item_name"]').eq(1).should('contain','Sauce Labs Bike Light')
        cy.get('[class="inventory_item_name"]').eq(2).should('contain','Sauce Labs Bolt T-Shirt')

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_badge"]').should('contain','2')

        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('[class="shopping_cart_badge"]').should('contain','1')

        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
        cy.get('[class="cart_item"]').should('not.exist')
    })

})