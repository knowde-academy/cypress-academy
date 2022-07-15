class LoginPage {
    navigate() {
        cy.visit('https://www.saucedemo.com/')
    }

    enterUser(username) {
        cy.get('[data-test="username"]').type(username)
        return this
    }

    enterPasswor(password) {
        cy.get('[data-test="password"]').type
        return this
    }

    submit() {
        cy.get('[data-test="login-button"]').click()
        return
    }
}
export default LoginPage