describe("Authentication", () => {
  it("Login with standard user", () => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });

  it("Login with locked out user", () => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });

  it("Login with problem user", () => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("problem_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });

  it("Login with performance glitch user", () => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("performance_glitch_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });

  it("Fields have not beeen completed", () => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').click();
  });

  it("Field 'password' hah not beeen completed", () => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="login-button"]').click();
  });

  it("Field 'login' has not beeen completed", () => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });
});
