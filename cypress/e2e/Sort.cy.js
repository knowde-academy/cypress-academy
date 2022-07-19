describe('Sort', () => {
    

    it ('Sort_name_A_to_Z',()=> {

        cy.login_standard()
        cy.get('[class="inventory_item_name"]').first().should('contain', 'Sauce Labs Backpack').parent().should('have.attr', 'id', 'item_4_title_link')
        cy.get('[class="inventory_item_name"]').last().should('contain', 'Test.allTheThings() T-Shirt (Red)').parent().should('have.attr', 'id', 'item_3_title_link')
    })


    it ('Sort_name_Z_to_A',()=> {
        
        cy.login_standard()
        cy.get('[data-test="product_sort_container"]').select(1)
        cy.get('[class="inventory_item_name"]').first().should('contain', 'Test.allTheThings() T-Shirt (Red)').parent().should('have.attr', 'id', 'item_3_title_link')
        cy.get('[class="inventory_item_name"]').last().should('contain', 'Sauce Labs Backpack').parent().should('have.attr', 'id', 'item_4_title_link')
    })


    it ('Sort_price_low_to_high',()=> {

        cy.login_standard()
        cy.get('[data-test="product_sort_container"]').select(2)
        cy.get('[class="inventory_item_name"]').first().should('contain', 'Sauce Labs Onesie').parent().should('have.attr', 'id', 'item_2_title_link')
        cy.get('[class="inventory_item_name"]').last().should('contain', 'Sauce Labs Fleece Jacket').parent().should('have.attr', 'id', 'item_5_title_link')
    })


    it ('Sort_price_high_to_low',()=> {

        cy.login_standard()
        cy.get('[data-test="product_sort_container"]').select(3)
        cy.get('[class="inventory_item_name"]').first().should('contain', 'Sauce Labs Fleece Jacket').parent().should('have.attr', 'id', 'item_5_title_link')
        cy.get('[class="inventory_item_name"]').last().should('contain', 'Sauce Labs Onesie').parent().should('have.attr', 'id', 'item_2_title_link')
    })

})