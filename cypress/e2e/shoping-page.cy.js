describe('Shoping-page', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
      })
      
      it('T-01 (Ch  eck results when product name is clicked)', () => {
        cy.get('.inventory_item_name').first().click()
        cy.url().should('include', '/inventory-item.html?id=')
      })

      it('T-02 (Check results when product image is clicked)', () => {
        cy.get('.inventory_item_img').first().click()
      })

      it('T-03 (Check "back to products" button)', () => {
        cy.get('.inventory_item_name').first().click()
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
      })

      it('T-04 (Check results when products list sorted by name (A to Z))', () => {
        cy.get('select[data-test="product_sort_container"]').select('za')
      })
})
