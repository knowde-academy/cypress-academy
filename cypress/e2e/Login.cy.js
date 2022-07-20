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
    username:"user1234#$%@",
    password:"password1234#$%@"
}]


/////////////////////////////////////////////////////////////////////////////////////

const users_without_username=[
{
    password:"user"
}
]

///////////////////////////////////////////////////////////////////////////////////

const users_without_password=[
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
                .should('contain', "Epic sadface: Sorry, this user has been locked out.")
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
                .should('contain','Epic sadface: Username and password do not match any user in this service')
            })
        })

        users_without_username.forEach((user)=>{
            it (user.password + " no_username", () => {
                cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
                cy.login_without_username(user.password)
                .get('[data-test="error"]')
                .should('contain','Epic sadface: Username is required')
            })
        })

        users_without_password.forEach((user)=>{
            it (user.username + " no_password", () => {
                cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
                cy.login_without_password(user.username)
                .get('[data-test="error"]')
                .should('contain','Epic sadface: Password is required')
            })
        })

        it ('empty_username_and_password', ()=>{
            cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
            cy.login_without_all()
            .get('[data-test="error"]')
            .should('contain','Epic sadface: Username is required')
        })
    })



   