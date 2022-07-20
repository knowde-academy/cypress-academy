import MainMenu from "../../cypress/PageObject/MainMenu";
import {Data_test} from "../../cypress/Datatest"

const menu= new MainMenu()
const elements=Object.values(Data_test);




describe('shopping_main_site_go_to_details', () => {
    

        elements.forEach((item)=>{

        it ('go_to_details_by_name_'+item.number,()=> {

        cy.login_standard()

        menu.check_title(item.number,item.name)
        .go_item(item.number)
        .check_title_in_details(item.name)
    })
})

        elements.forEach((item)=>{

        it ('go_to_details_by_image_'+item.number,()=> {

        cy.login_standard()

        menu.check_img(item.number,item.src_img)
        .go_item_by_img(item.number)
        .check_img_in_details(item.number,item.src_img)
        })
        })

})