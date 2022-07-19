import {Data_test} from "../../cypress/Datatest"

class MainMenu {

    sort(x){
        return cy.get('[data-test="product_sort_container"]').select(x)
    }

    sort_container(text){
        return cy.get('[class="active_option"]').should('contain', text)
    }

    get_item_title_link(number){
        return cy.get('[id="item_'+number+'_title_link"]').should('exist')

    }

    get_item_img(number){
        return cy.get('[id="item_'+number+'_img_link"]').should('exist')
    }

    go_item(number){
        this.get_item_title_link(number).click()
        this.check_item_url(number)
    }

    go_item_by_img(number){
        this.get_item_img(number).click()
        this.check_item_url(number)
    }

    expand_list_options(option){
        cy.get('[id="react-burger-menu-btn"]').click()

        if (option==='reset'){
        return cy.get('[id="'+option+'_sidebar_link"]').click()
        }
        else if (option==='inventory'){
        return cy.get('[id="'+option+'_sidebar_link"]').click()
        }
        else if (option==='logout'){
        return cy.get('[id="'+option+'_sidebar_link"]').click()
        }
        else if (option==='about'){
        return cy.get('[id="'+option+'_sidebar_link"]').click()
        };

    }

    go_cart(){
         return cy.get('[class="shopping_cart_link"]').click()
                  .url().should('eq', 'https://www.saucedemo.com/cart.html')
    }

    cart_badge(){
        return cy.get('[class="shopping_cart_badge"]')
    }

    all_items(){
        return cy.get('[class="inventory_item_name"]')
    }

    details_item_name(){
        return cy.get('[class="inventory_details_name large_size"]')
    }


    details_item_img(){
        return cy.get('[class="inventory_details_img_container"]')
    }

    back_to_products(){
        return cy.get('[data-test="back-to-products"]').click()
    }

    url_inventory_is_good(){
        return cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    }

    check_img(number){

        if(number===3){
        this.get_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_3.src_img)
        }
        else if(number===2){
        this.get_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_2.src_img)
        }
        else if(number===4){
        this.get_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_4.src_img)
        }
        else if(number===1){
        this.get_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_1.src_img)
        }
        else if(number===0){
        this.get_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_0.src_img)
        }
        else if(number===5){
        this.get_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_5.src_img)
        }
    }

    check_img_in_details(number){

        if(number===3){
            this.details_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_3.src_img)
        }
        else if(number===2){
            this.details_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_2.src_img)
        }
        else if(number===4){
            this.details_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_4.src_img)
        }
        else if(number===1){
            this.details_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_1.src_img)
        }
        else if(number===0){
            this.details_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_0.src_img)
        }
        else if(number===5){
            this.details_item_img(number).children().should('have.attr', 'src').should('include',Data_test.item_5.src_img)
        }
    }

    check_title(number){

        if(number===3){
            this.get_item_title_link(number).should('contain',Data_test.item_3.name)
            }
        else if(number===2){
            this.get_item_title_link(number).should('contain',Data_test.item_2.name)
        }
        else if(number===4){
            this.get_item_title_link(number).should('contain',Data_test.item_4.name)
        }
        else if(number===1){
            this.get_item_title_link(number).should('contain',Data_test.item_1.name)
        }
        else if(number===0){
            this.get_item_title_link(number).should('contain',Data_test.item_0.name)
        }
        else if(number===5){
            this.get_item_title_link(number).should('contain',Data_test.item_5.name)
        }
    }

    check_title_in_details(number){

            if(number===3){
                this.details_item_name().should('contain',Data_test.item_3.name)
            }
            else if(number===2){
                this.details_item_name().should('contain',Data_test.item_2.name)
            }
            else if(number===4){
                this.details_item_name().should('contain',Data_test.item_4.name)
            }
            else if(number===1){
                this.details_item_name().should('contain',Data_test.item_1.name)
            }
            else if(number===0){
                this.details_item_name().should('contain',Data_test.item_0.name)
            }
            else if(number===5){
                this.details_item_name().should('contain',Data_test.item_5.name)
            }
    }

    check_item_url(number){
        if(number===3){
            cy.url().should('eq', Data_test.item_3.url)
        }
        else if(number===2){
            cy.url().should('eq', Data_test.item_2.url)
        }
        else if(number===4){
            cy.url().should('eq', Data_test.item_4.url)
        }
        else if(number===1){
            cy.url().should('eq', Data_test.item_1.url)
        }
        else if(number===0){
            cy.url().should('eq', Data_test.item_0.url)
        }
        else if(number===5){
            cy.url().should('eq', Data_test.item_5.url)
        }

    }

    get_button_add_cart(nr){
        if(nr===4)
            return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('contain','Add to cart')

        else if(nr===0){
            return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('contain','Add to cart')
        }
        else if(nr===1){
            return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('contain','Add to cart')
        }
        else if(nr===5){
            return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('contain','Add to cart')
        }
        else if(nr===2){
            return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('contain','Add to cart')
        }
        else if(nr===3){
            return cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('contain','Add to cart')
        }

    }

    add_item(number){
        this.get_button_add_cart(number).click()

    }

    get_button_remove_cart(nr){
        if(nr===4)
            return cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove')

        else if(nr===0){
            return cy.get('[data-test="remove-sauce-labs-bike-light"]').should('contain','Remove')
        }
        else if(nr===1){
            return cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').should('contain','Remove')
        }
        else if(nr===5){
            return cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').should('contain','Remove')
        }
        else if(nr===2){
            return cy.get('[data-test="remove-sauce-labs-onesie"]').should('contain','Remove')
        }
        else if(nr===3){
            return cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').should('contain','Remove')
        }

    }

    remove_item(number){
        this.get_button_remove_cart(number).click()

    }
}

export default MainMenu