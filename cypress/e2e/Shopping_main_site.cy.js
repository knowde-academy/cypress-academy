describe('shopping_main_site', () => {
    
    
    it ('go_to_details_by_name',()=> {



        cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
        cy.login('standard_user', 'secret_sauce')

////////////////////////////////////////////////////////////////////////////////////////////////////

        const go_to_3=cy.get('[id="item_3_title_link"]')
        const name_item_3='Test.allTheThings() T-Shirt (Red)'
        const url_of_item_3='https://www.saucedemo.com/inventory-item.html?id=3'

        go_to_3
        .contains(name_item_3)
        go_to_3.click()
        .url().should('eq', url_of_item_3)
        cy.get('[class="inventory_details_name large_size"]').contains(name_item_3)
        .go('back')

///////////////////////////////////////////////////////////////////////////////////////////////////

        const go_to_2=cy.get('[id="item_2_title_link"]')
        const name_item_2='Sauce Labs Onesie'
        const url_of_item_2='https://www.saucedemo.com/inventory-item.html?id=2'

        go_to_2
        .contains(name_item_2)
        go_to_2.click()
        .url().should('eq', url_of_item_2)
        cy.get('[class="inventory_details_name large_size"]').contains(name_item_2)
        .go('back')

///////////////////////////////////////////////////////////////////////////////////////////////////////

        const go_to_5=cy.get('[id="item_5_title_link"]')
        const name_item_5='Sauce Labs Fleece Jacket'
        const url_of_item_5='https://www.saucedemo.com/inventory-item.html?id=5'

        go_to_5
        .contains(name_item_5)
        go_to_5.click()
        .url().should('eq', url_of_item_5)
        cy.get('[class="inventory_details_name large_size"]').contains(name_item_5)
        .go('back')

///////////////////////////////////////////////////////////////////////////////////////////////////////

        const go_to_1=cy.get('[id="item_1_title_link"]')
        const name_item_1='Sauce Labs Bolt T-Shirt'
        const url_of_item_1='https://www.saucedemo.com/inventory-item.html?id=1'

        go_to_1
        .contains(name_item_1)
        go_to_1.click()
        .url().should('eq', url_of_item_1)
        cy.get('[class="inventory_details_name large_size"]').contains(name_item_1)
        .go('back')

/////////////////////////////////////////////////////////////////////////////////////////////////////

        const go_to_0=cy.get('[id="item_0_title_link"]')
        const name_item_0='Sauce Labs Bike Light'
        const url_of_item_0='https://www.saucedemo.com/inventory-item.html?id=0'

        go_to_0
        .contains(name_item_0)
        go_to_0.click()
        .url().should('eq', url_of_item_0)
        cy.get('[class="inventory_details_name large_size"]').contains(name_item_0)
        .go('back')

///////////////////////////////////////////////////////////////////////////////////////////////////

        const go_to_4=cy.get('[id="item_4_title_link"]')
        const name_item_4='Sauce Labs Backpack'
        const url_of_item_4='https://www.saucedemo.com/inventory-item.html?id=4'

        go_to_4
        .contains(name_item_4)
        go_to_4.click()
        .url().should('eq', url_of_item_4)
        cy.get('[class="inventory_details_name large_size"]').contains(name_item_4)
        .go('back')

    })


    it ('go_to_details_by_image',()=> {

    })
})
