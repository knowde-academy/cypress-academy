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
        return this
    }

    go_item_by_img(number){
        this.get_item_img(number).click()
        this.check_item_url(number)
        return this
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

    check_img(number,src_img){

        this.get_item_img(number).children().should('have.attr', 'src').should('include',src_img)
        return this
    }

    check_img_in_details(number,src_img){
        
        this.details_item_img(number).children().should('have.attr', 'src').should('include',src_img)
        return this
    }

    check_title(number,name){

        this.get_item_title_link(number).should('contain',name)
        return this
        
    }

    check_title_in_details(name){
        this.details_item_name().should('contain',name)
        return this
           
    }

    check_item_url(number){
        if(number===3){
            return cy.url().should('eq', Data_test.item_3.url)
        }
        else if(number===2){
            return cy.url().should('eq', Data_test.item_2.url)
        }
        else if(number===4){
            return cy.url().should('eq', Data_test.item_4.url)
        }
        else if(number===1){
            return cy.url().should('eq', Data_test.item_1.url)
        }
        else if(number===0){
            return cy.url().should('eq', Data_test.item_0.url)
        }
        else if(number===5){
            return cy.url().should('eq', Data_test.item_5.url)
        }

    }

    get_button_add_cart(add){
        return cy.get(add).should('contain','Add to cart')

    }

    add_item(number){
        this.get_button_add_cart(number).click()
        return this

    }

    get_button_remove_cart(remove){
        return cy.get(remove).should('contain','Remove')

    }

    remove_item(number){
        this.get_button_remove_cart(number).click()
        return this

    }
}

export default MainMenu