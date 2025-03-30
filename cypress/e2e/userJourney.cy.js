describe("User journey", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it("A user can find a course on the homepage and complete the courses lessons", () => {
    cy.visit("http://localhost:3000");
    cy.getByData("course-0")
      .should("be.visible")
      .find("a")
      .eq(3)
      .contains("Get started")
      .click();
    cy.location("pathname").should("eq", "/testing-your-first-application");
    cy.getByData("next-lesson-button").should("be.visible").click();
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    );
    cy.getByData("challenge-answer-0").should("be.visible").click();
    cy.getByData("next-lesson-button").should("be.visible").click();
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    );
  });
});
