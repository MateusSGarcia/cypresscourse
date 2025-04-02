describe("automationexercise.com exercises", () => {
  it("Register User", () => {
    // Acessar o site
    cy.visit("http://automationexercise.com");
    //verificar se ele carregou corretamente
    cy.get(".shop-menu").should("be.visible");
    cy.get("#slider-carousel").should("be.visible");
    //Clicar no botão Signup / Login
    cy.get("li").contains("Signup / Login").should("be.visible").click();
    cy.get("h2").contains("New User Signup!").should("be.visible");
    cy.getByDataQA("signup-name").should("be.visible").type("");
  });
});
