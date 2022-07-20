import {Data_test} from "../../cypress/Datatest";
import MainMenu from "../../cypress/PageObject/MainMenu";
const menu= new MainMenu();


class Cart {

    continue_shopping(){

      cy.get('[data-test="continue-shopping"]').click()
      menu.url_inventory_is_good()
      return this

    }

    checkout(){
    return cy.get('[data-test="checkout"]').click()
      .url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
    }

    cancel_first_step(){
    return cy.get('[data-test="cancel"]').click()
      .url().should('eq', 'https://www.saucedemo.com/cart.html')

    }

    cancel_second_step(){
        cy.get('[data-test="cancel"]').click()
        menu.url_inventory_is_good()
        return this

    }
    continue_checkout(){
        return cy.get('[data-test="continue"]').click()
        .url().should('eq','https://www.saucedemo.com/checkout-step-two.html')
    }

    type_firstname(name){
        return cy.get('[data-test="firstName"]').type(name)
    }
    type_lastname(name){
        return cy.get('[data-test="lastName"]').type(name)
    }
    type_postalcode(name){
        return cy.get('[data-test="postalCode"]').type(name)
    }
    type_default(){
        this.type_firstname('Jan')
        this.type_lastname('Kowalski')
        this.type_postalcode('15-100')
        return this
    }

}

export default Cart