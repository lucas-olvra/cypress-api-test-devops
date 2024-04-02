/// <reference types="cypress" />

describe("buscar dispositivos", () => {
  it(
    "buscar um dispositivo especifico",
    { env: { snapshotOnly: true } },
    () => {
      cy.fakeRestAPI().then((response) => {
        expect(response.status).equal(200);

        expect(response.body).not.empty;
      });
    }
  );
});
