import MainMenu from "../../cypress/PageObject/MainMenu";
import {img_numbers_board} from "../../cypress/Datatest"

const menu= new MainMenu()




describe('shopping_main_site_go_to_details', () => {
    

        img_numbers_board.forEach((nr)=>{

        it ('go_to_details_by_name_'+nr,()=> {

        cy.login_standard()

        menu.check_title(nr)
        menu.go_item(nr)
        menu.check_title_in_details(nr)
    })
})

        img_numbers_board.forEach((nr)=>{

        it ('go_to_details_by_image_'+nr,()=> {

        cy.login_standard()

        menu.check_img(nr)
        menu.go_item_by_img(nr)
        menu.check_img_in_details(nr)
        })
        })

})