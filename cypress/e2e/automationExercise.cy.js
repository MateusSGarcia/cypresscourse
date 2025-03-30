describe("automationexercise.com exercises", () => {
  it("Register User", () => {
    // Acessar o site
    cy.visit("http://automationexercise.com");
    //verificar se ele carregou corretamente
    cy.get(".shop-menu").should("be.visible");
    cy.get("#slider-carousel").should("be.visible");
    //Clicar no botão Signup / Login
    cy.get("");
  });
});
