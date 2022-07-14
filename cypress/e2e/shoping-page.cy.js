describe('Shoping-page', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
      })
      
      it('T-01 (Check results when product name is clicked)', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click()
      })
})
