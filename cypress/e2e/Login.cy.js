const users=[{
    username:"standard_user",
    password:"secret_sauce"
},
{
    username:"locked_out_user",
    password:"secret_sauce"

},
{
    username:"problem_user",
    password:"secret_sauce"

},
{
    username:"performance_glitch_user",
    password:"secret_sauce"

},

]

/////////////////////////////////////////////////////////////////////////////////////
const users_wrong_pass_or_username=[
{
    username:"userqwe1",
    password:"secret_sauce"
},
{
    username:"standard_user",
    password:"1234as"
},
{
    username:"user1234",
    password:"user1234"
},
{
    username:"1234",
    password:"1234"
},
{
    username:"user",
    password:"user"
},
{
    username:"#$%@",
    password:"#$%@"
},
{
    username:"user1234#$%@",
    password:"user1234#$%@"
}]


/////////////////////////////////////////////////////////////////////////////////////

const users_without_username=[{
    password:"1234"
},
{
    password:"user"
},
{
    password:"user1234"
},
{
    password:"#$%@"
},
{
    password:"user1234#$%@"
}]

///////////////////////////////////////////////////////////////////////////////////

const users_without_password=[{
    username:"1234"
},
{
    username:"user"
},
{
    username:"user1234"
},
{
    username:"#$%@"
},
{
    username:"user1234#$%@"
}]

/////////////////////////////////////////////////////////////////////////////////////


describe('login', () => {
    users.forEach((user)=>{
        it (user.username, () => {
            cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
            cy.login(user.username, user.password)

              if (user.username==='locked_out_user') {
                cy.get('[data-test="error"]')
                .contains( "Epic sadface: Sorry, this user has been locked out.")
              }
              else {
              cy.url()
              .should('eq', 'https://www.saucedemo.com/inventory.html')
              }
          })
        })

        users_wrong_pass_or_username.forEach(user=>{
            it ((user.username+' bad_username_or_password'), ()=>{
                cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
                cy.login(user.username, user.password)
                cy.get('[data-test="error"]')
                .contains('Epic sadface: Username and password do not match any user in this service')
            })
        })

        users_without_username.forEach((user)=>{
            it (user.password + " no_username", () => {
                cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
                cy.login_without_username(user.password)
                .get('[data-test="error"]')
                .contains('Epic sadface: Username is required')
            })
        })

        users_without_password.forEach((user)=>{
            it (user.username + " no_password", () => {
                cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
                cy.login_without_password(user.username)
                .get('[data-test="error"]')
                .contains('Epic sadface: Password is required')
            })
        })

        it ('empty_username_and_password', ()=>{
            cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
            cy.login_without_all()
            .get('[data-test="error"]')
            .contains('Epic sadface: Username is required')
        })
    })






        // it ('empty_username', ()=>{
        //     cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
        //     cy.login_without_username('user')
        //     .get('[data-test="error"]')
        //     .contains('Epic sadface: Username is required')
        // })

        // it ('empty_password', ()=>{
        //     cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
        //     cy.login_without_password('1234')
        //     .get('[data-test="error"]')
        //     .contains('Epic sadface: Password is required')
        // })
    

    


    // it ('login_standard', () => {
    //   cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    //   cy.login('standard_user','secret_sauce')
    //     .get('[data-test="login-button"]')
    //     .click()
    //     .url()
    //     .should('eq', 'https://www.saucedemo.com/inventory.html')
    // })
    // it ('login_block', ()=>{
    //     cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    //     cy.login('locked_out_user', 'secret_sauce')
    //     .get('[data-test="login-button"]')
    //     .click()
    //     .url()
    //     .should('eq', 'https://www.saucedemo.com/')
    // })

    // it ('login_problem', ()=>{
    //     cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    //     cy.login('problem_user', 'secret_sauce')
    //     .get('[data-test="login-button"]')
    //     .click()
    //     .url()
    //     .should('eq', 'https://www.saucedemo.com/inventory.html')
    //     .get('[alt="Sauce Labs Backpack"]').should('be.visible').and('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg')
    // })

   