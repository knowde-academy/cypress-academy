import MainMenu from "../../cypress/PageObject/MainMenu";

const menu= new MainMenu()

const Data_test = {
        item_3: {
                name: 'Test.allTheThings() T-Shirt (Red)',
                url:'https://www.saucedemo.com/inventory-item.html?id=3',
                src_img: '/static/media/red-tatt-1200x1500.e32b4ef9.jpg'
        },
        item_2: {
                name: 'Sauce Labs Onesie',
                url:'https://www.saucedemo.com/inventory-item.html?id=2',
                src_img: '/static/media/red-onesie-1200x1500.1b15e1fa.jpg'
        },
        item_5: {
                name: 'Sauce Labs Fleece Jacket',
                url:'https://www.saucedemo.com/inventory-item.html?id=5',
                src_img: '/static/media/sauce-pullover-1200x1500.439fc934.jpg'
        },
        item_1: {
                name: 'Sauce Labs Bolt T-Shirt',
                url:'https://www.saucedemo.com/inventory-item.html?id=1',
                src_img: '/static/media/bolt-shirt-1200x1500.c0dae290.jpg'
        },
        item_0: {
                name: 'Sauce Labs Bike Light',
                url:'https://www.saucedemo.com/inventory-item.html?id=0',
                src_img: '/static/media/bike-light-1200x1500.a0c9caae.jpg'
        },
        item_4: {
                name: 'Sauce Labs Backpack',
                url:'https://www.saucedemo.com/inventory-item.html?id=4',
                src_img: '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg'
        },

}

describe('shopping_main_site_go_to_details', () => {
    

        it ('go_to_details_by_name_3',()=> {

        cy.login_standard()

        menu.get_item_title_link('3').should('contain',Data_test.item_3.name)
        .click()
        .url().should('eq', Data_test.item_3.url)
        menu.details_item_name().should('contain',Data_test.item_3.name)
    })

///////////////////////////////////////////////////////////////////////////////////////////////////

        it ('go_to_details_by_name_2',()=> {

        cy.login_standard()

        menu.get_item_title_link('2').should('contain',Data_test.item_2.name)
        .click()
        .url().should('eq', Data_test.item_2.url)
        menu.details_item_name().should('contain',Data_test.item_2.name)
        })

///////////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_name_5',()=> {
                
        cy.login_standard()

        menu.get_item_title_link('5').should('contain',Data_test.item_5.name)
        .click()
        .url().should('eq', Data_test.item_5.url)
        menu.details_item_name().should('contain',Data_test.item_5.name)
        })

///////////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_name_1',()=> {

        cy.login_standard()

        menu.get_item_title_link('1').should('contain',Data_test.item_1.name)
        .click()
        .url().should('eq', Data_test.item_1.url)
        menu.details_item_name().should('contain',Data_test.item_1.name)
        })

/////////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_name_0',()=> {

        cy.login_standard()

        menu.get_item_title_link('0').should('contain',Data_test.item_0.name)
        .click()
        .url().should('eq', Data_test.item_0.url)
        menu.details_item_name().should('contain',Data_test.item_0.name)
        })

///////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_name_4',()=> {

        cy.login_standard()

        menu.get_item_title_link('4').should('contain',Data_test.item_4.name)
        .click()
        .url().should('eq', Data_test.item_4.url)
        menu.details_item_name().should('contain',Data_test.item_4.name)
        })


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////TEST_IMAGES//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

    it ('go_to_details_by_image_4',()=> {
        

        cy.login_standard()

        menu.get_item_img('4').children().should('have.attr', 'src').should('include',Data_test.item_4.src_img)
        menu.get_item_img('4').click()
        .url().should('eq', Data_test.item_4.url)
        menu.details_item_img().children().should('have.attr', 'src').should('include',Data_test.item_4.src_img)
        })

////////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_image_0',()=> {


        cy.login_standard()

        menu.get_item_img('0').children().should('have.attr', 'src').should('include',Data_test.item_0.src_img)
        menu.get_item_img('0').click()
        .url().should('eq', Data_test.item_0.url)
        menu.details_item_img().children().should('have.attr', 'src').should('include',Data_test.item_0.src_img)
        })
        
////////////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_image_1',()=> {

        cy.login_standard()

        menu.get_item_img('1').children().should('have.attr', 'src').should('include',Data_test.item_1.src_img)
        menu.get_item_img('1').click()
        .url().should('eq', Data_test.item_1.url)
        menu.details_item_img().children().should('have.attr', 'src').should('include',Data_test.item_1.src_img)
        })

////////////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_image_5',()=> {

        cy.login_standard()

        menu.get_item_img('5').children().should('have.attr', 'src').should('include',Data_test.item_5.src_img)
        menu.get_item_img('5').click()
        .url().should('eq', Data_test.item_5.url)
        menu.details_item_img().children().should('have.attr', 'src').should('include',Data_test.item_5.src_img)
        })

////////////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_image_2',()=> {

        cy.login_standard()

        menu.get_item_img('2').children().should('have.attr', 'src').should('include',Data_test.item_2.src_img)
        menu.get_item_img('2').click()
        .url().should('eq', Data_test.item_2.url)
        menu.details_item_img().children().should('have.attr', 'src').should('include',Data_test.item_2.src_img)
        })

////////////////////////////////////////////////////////////////////////////////////////////////////////
        it ('go_to_details_by_image_3',()=> {

        cy.login_standard()

        menu.get_item_img('3').children().should('have.attr', 'src').should('include',Data_test.item_3.src_img)
        menu.get_item_img('3').click()
        .url().should('eq', Data_test.item_3.url)
        menu.details_item_img().children().should('have.attr', 'src').should('include',Data_test.item_3.src_img)
        })

})