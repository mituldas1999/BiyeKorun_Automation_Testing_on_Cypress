describe("As an user I should be able to delete my package", () => {
  let packageId;
  before(() => {
    cy.readFile("cypress/fixtures/packageId.json").then((data) => {
      packageId = data.newId;
      console.log(packageId);
    });
  });
  it("Checking if an user can delete his package or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "DELETE",
      url: `/api/package/delete/${packageId}`,
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
