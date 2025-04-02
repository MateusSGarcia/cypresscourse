describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading")
        .should("be.visible")
        .contains("Testing Next.js Applications with Cypress");
    });
    it("the features in the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses");
      cy.get("dt").eq(1).contains("25+ Lessons");
      cy.get("dt").eq(2).contains("Free and Open Source");
    });
  }),
    context("Courses section", () => {
      it("course:Testing Your First Next.js Application", () => {
        cy.getByData("course-0")
          .should("be.visible")
          .find("a")
          .eq(3)
          .contains("Get started")
          .click();
        cy.url().should("include", "/testing-your-first-application");
        // cy.location("pathname").should("eq", "/testing-your-first-application");
      });
      it("course:Testing Foundations", () => {
        cy.getByData("course-1")
          .should("be.visible")
          .find("a")
          .eq("3")
          .contains("Get started")
          .click();
        cy.location("pathname").should("eq", "/testing-foundations");
      });

      it("course:Cypress Fundamentals", () => {
        cy.getByData("course-2")
          .should("be.visible")
          .find("a")
          .eq(3)
          .contains("Get started")
          .click();
        cy.location("pathname").should("eq", "/cypress-fundamentals");
      });
    });
});
