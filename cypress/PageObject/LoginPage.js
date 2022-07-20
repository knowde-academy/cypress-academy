class LoginPage {

    navigate() {
        cy.visit('/')
        return this; 
    }

    login(username,password) {
        this.enterUsername(username)
        this.enterPassword(password)
        return this; 
    }

    enterUsername(username){
        cy.get('[data-test="username"]')
        .type(username)
        return this; 
    }

    enterPassword(password){
        cy.get('[data-test="password"]')
        .type(password)
        return this; 
    }

    clickLogin(){
        cy.get('[data-test="login-button"]')
        .click()
        return this; 
    }
}

export default LoginPage