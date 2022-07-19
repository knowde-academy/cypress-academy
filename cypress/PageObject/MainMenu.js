class MainMenu {

    sort(x){
        return cy.get('[data-test="product_sort_container"]').select(x)
    }

    sort_container(text){
        return cy.get('[class="active_option"]').should('contain', text)
    }

    get_item_title_link(number){
        return cy.get('[id="item_'+number+'_title_link"]')

    }

    get_item_img(number){
        return cy.get('[id="item_'+number+'_img_link"]')
    }

    expand_list_options(option){
        cy.get('[id="react-burger-menu-btn"]').click()

        if (option==='reset'){
        cy.get('[id="'+option+'_sidebar_link"]').click()
        }
        else if (option==='inventory'){
        cy.get('[id="'+option+'_sidebar_link"]').click()
        }
        else if (option==='logout'){
        cy.get('[id="'+option+'_sidebar_link"]').click()
        }
        else if (option==='about'){
        cy.get('[id="'+option+'_sidebar_link"]').click()
        };

        return this
    }

    go_cart(){
         return cy.get('[class="shopping_cart_link"]').click()
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
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    }

}

export default MainMenu