describe("As an user, i should be able to confirm on the package order", () => {
  it("Checking if the user is able to confirm the package order or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/payment/paypal/orders",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        currency: "USD",
        packageId: "650526682c649fe7162dcee0",
      },
    }).then((response) => {
      console.log(response.body.status);
      cy.log(response.body.status);
    });
  });
});
