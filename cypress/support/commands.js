// ***********************************************

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add("getByDataQA", (selector) => {
  return cy.get(`[data-qa=${selector}]`);
});
