describe("Cart", () => {
  beforeEach(() => {
    cy.visit("/").url().should("eq", "https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.getCookies("session-username");
  });

  it("Viewing available products", () => {
    cy.get(".inventory_item_name").should("have.length", 6);
  });

  it("Adding to cart from list view", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").contains("1").should("be.visible");
  });

  it("Add to cart from product view", () => {
    cy.get("#item_0_img_link > .inventory_item_img").click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_badge").contains("1").should("be.visible");
  });

  it("Removing products from a cart", () => {
    cy.get("#item_0_img_link > .inventory_item_img").click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("Browsing products in a cart", () => {
    cy.get("#item_0_img_link > .inventory_item_img").click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").should("be.visible");
  });

  it("Making an order", () => {
    cy.get(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    ).click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Jan");
    cy.get('[data-test="lastName"]').type("Kowalski");
    cy.get('[data-test="postalCode"]').type("38-400");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.url().should("eq", "https://www.saucedemo.com/checkout-complete.html");
  });
});
