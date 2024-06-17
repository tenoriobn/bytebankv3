Cypress.Commands.add('getByData', (seletor) => {
  return cy.get(`[data-test=${seletor}]`)
});

Cypress.Commands.add('getByText', (seletor, text) => {
  cy.get(`[data-test=${seletor}]`).contains(`${text}`);
});