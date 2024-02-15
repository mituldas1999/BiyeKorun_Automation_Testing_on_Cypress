describe("As an admin, i should be able to payment on the  SSL commerz initial", () => {
  it("Checking if an admin is able payment on the SSL commerz initial", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/payment/sslinit",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        currency: "BDT",
        packageId: "650526682c649fe7162dcee0",
      },
    }).then((response) => {
      console.log(response.body.url);
      cy.log(response.body.url);
    });
  });
});
