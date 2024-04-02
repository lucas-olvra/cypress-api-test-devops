/// <reference types="cypress" />

describe("buscar dispositivos", () => {
  it("pegando todas as atividades", { env: { snapshotOnly: true } }, () => {
    cy.fakeRestAPI().then((response) => {
      expect(response.status).equal(200);

      expect(response.body).not.empty;
    });
  });

  it("pegando uma atividade", { env: { snapshotOnly: true } }, () => {
    cy.oneActivity(1).then((response) => {
      expect(response.status).equal(200);

      expect(response.body).not.empty;
    });
  });
});
