Cypress.Commands.add("fakeRestAPI", () => {
  cy.request({
    method: "GET",
    url: `${Cypress.config("baseUrl")}/api/v1/Activities`,
    failOnStatusCode: false,
  }).then((retorno) => {
    return retorno;
  });
});

Cypress.Commands.add("oneActivity", (id) => {
  cy.request({
    method: "GET",
    url: `${Cypress.config("baseUrl")}/api/v1/Activities`,
    qs: id,
    failOnStatusCode: false,
  }).then((retorno) => {
    return retorno;
  });
});
