import MainMenu from "../../cypress/PageObject/MainMenu";
const menu= new MainMenu()

describe('Sort', () => {
    

    it ('Sort_name_A_to_Z',()=> {

        cy.login_standard()
        menu.sort_container('Name (A to Z)')
        menu.all_items().first().should('contain', 'Sauce Labs Backpack').parent().should('have.attr', 'id', 'item_4_title_link')
        menu.all_items().last().should('contain', 'Test.allTheThings() T-Shirt (Red)').parent().should('have.attr', 'id', 'item_3_title_link')
    })


    it ('Sort_name_Z_to_A',()=> {
        
        cy.login_standard()
        menu.sort(1)
        menu.sort_container('Name (Z to A)')
        menu.all_items().first().should('contain', 'Test.allTheThings() T-Shirt (Red)').parent().should('have.attr', 'id', 'item_3_title_link')
        menu.all_items().last().should('contain', 'Sauce Labs Backpack').parent().should('have.attr', 'id', 'item_4_title_link')
    })


    it ('Sort_price_low_to_high',()=> {

        cy.login_standard()
        menu.sort(2)
        menu.sort_container('Price (low to high)')
        menu.all_items().first().should('contain', 'Sauce Labs Onesie').parent().should('have.attr', 'id', 'item_2_title_link')
        menu.all_items().last().should('contain', 'Sauce Labs Fleece Jacket').parent().should('have.attr', 'id', 'item_5_title_link')
    })


    it ('Sort_price_high_to_low',()=> {

        cy.login_standard()
        menu.sort(3)
        menu.sort_container('Price (high to low)')
        menu.all_items().first().should('contain', 'Sauce Labs Fleece Jacket').parent().should('have.attr', 'id', 'item_5_title_link')
        menu.all_items().last().should('contain', 'Sauce Labs Onesie').parent().should('have.attr', 'id', 'item_2_title_link')
    })

})