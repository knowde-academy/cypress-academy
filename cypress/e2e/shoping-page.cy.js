describe('Shoping-page', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce')
      })
      
      it('T-01 (Check results when product name is clicked)', () => {
        cy.get('.inventory_item_name').last()
        //TODO: CHECK URL AFTER CLICK PRODUCT NAME
      })

      it('T-02 (Check results when product image is clicked)', () => {
        cy.get('.inventory_item_img').first().click()
        //TODO: CHECK URL AFTER CLICK IMAGE
      })

      it('T-03 (Check "back to products" button)', () => {
        cy.get('.inventory_item_name').first().click()
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
      })

      it('T-04 (Check results when products list sorted by name (Z to A))', () => {
        cy.get('select[data-test="product_sort_container"]').select('za')
        
        //TODO: CHECK SORTING (Z to A), (A to Z), (High to low), (Low to high)
      })

      it('Check results when product is added to cart from list view', () => {
        cy.get('[class="btn btn_primary btn_small btn_inventory"]').first().click()
        cy.get('[class="btn btn_secondary btn_small btn_inventory"]').should('have.text', 'Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain', '1')

      })

      it('Check results when product is added to cart from product subpage', () => {
        cy.get('.inventory_item_name').last().click()
        cy.get('[class="btn btn_primary btn_small btn_inventory"]').click()
        cy.get('[class="btn btn_secondary btn_small btn_inventory"]').should('have.text', 'Remove')
        cy.get('[class="shopping_cart_badge"]').should('contain', '1')

      })

      it('Check results when product is deleted from cart', () => {
        cy.get('[class="btn btn_primary btn_small btn_inventory"]').first().click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[class="btn btn_secondary btn_small cart_button"]').should('have.text', 'Remove').click()
        cy.get('[class="shopping_cart_badge"]').should('not.exist')
        cy.get('[class="cart_item"]').should('not.exist')
      })

      it('Check results when checkout button is clicked  with product in cart', () =>{
        cy.get('[class="btn btn_primary btn_small btn_inventory"]').first().click()
        cy.get('[class="shopping_cart_link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
      })

      it('Check results when step one of checkout have empty First Name/ Last Name and Zip code', () => {
        cy.addProduct()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
      })

      it('Check results when step one of checkout have empty Last Name', () => {
        cy.addProduct()
        cy.get('[data-test="firstName"]').type('x')
        cy.get('[data-test="postalCode"]').type('d')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Error: Last Name is required')
      })

      it('Check results when step one of checkout have empty Postal Code', () => {
        cy.addProduct()
        cy.get('[data-test="firstName"]').type(21)
        cy.get('[data-test="lastName"]').type(37)
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required')
      })

      it('Check results when First Name Last Name and Zip code are filled correctly', () => {
        cy.addProduct()
        cy.checkout('xd', '1234', '666')
        cy.get('[class="submit-button btn btn_primary cart_button btn_action"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
      })

      it('Check results when finish button is clicked', () => {
        cy.addProduct()
        cy.checkout('xd', '1234', '666')
        cy.get('[class="submit-button btn btn_primary cart_button btn_action"]').click()
        cy.get('[data-test="finish"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
      })

      it('Check results when "back to home" buttos is clicked', () => {
        cy.addProduct()
        cy.checkout('xd', '1234', '666')
        cy.get('[class="submit-button btn btn_primary cart_button btn_action"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
      })

})
