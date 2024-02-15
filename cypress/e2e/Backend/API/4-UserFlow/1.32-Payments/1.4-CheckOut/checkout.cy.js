describe("As an user, i should be able to show on the payment confirm message", () => {
  it("Checking if the user can see the payment confirm message or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/payment/stripe/checkout",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        currency: "USD",
        packageId: "650526682c649fe7162dcee0",
      },
    }).then((response) => {
      console.log(response.body);
      cy.log(response.body);
    });
  });
});
