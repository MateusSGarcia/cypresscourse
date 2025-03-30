describe("Newsletter subscribe form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("allow users to subscribe the e-mail form", () => {
    cy.getByData("email-input").should("be.visible").type("teste@gmail.com");
    cy.getByData("submit-button").should("be.visible").click();
    cy.getByData("success-message").should("exist").contains("teste@gmail.com");
  });

  it("bad e-mail adress", () => {
    cy.getByData("email-input").type("teste");
    cy.getByData("submit-button").click();
    cy.getByData("success-message").should("not.exist");
  });

  it("already exist e-mail", () => {
    cy.getByData("email-input").type("john@example.com");
    cy.getByData("submit-button").click();
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.");
  });
});
