describe('Reset_app_state', () => {

    it ('Reset_app_state', ()=>{

        cy.login_standard()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[class="shopping_cart_badge"]').should('contain', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove')


        cy.get('[id="react-burger-menu-btn"]').click()
        cy.get('[id="reset_sidebar_link"]').click()


        cy.get('[class="shopping_cart_badge"]').should('not.exist')
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[class="cart_item"]').should('not.exist')
        
        
        
    })
})