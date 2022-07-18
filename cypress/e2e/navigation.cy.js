describe("Navigation", () => {
  // before each test visit page and log in (correct user)
  beforeEach(() => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    // let cookie1 = document.cookiel;
    cy.getCookies()
      .should("have.length", 1)
      .then((cookies) => {
        expect(cookies[0]).to.have.property("name", "session-username");
      });
  });

  it("Resetting the app state", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });

  //   it("Left sidebar", () => {});

  //   it("Back from product to list", () => {});

  //   it("Cart", () => {});

  //   it("Social media", () => {});
});
