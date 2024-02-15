describe("User should be able to get the partner preference by comparing with their own", () => {
  it("Checking if a user can get partner preference by comparing with their own", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/compare-partner-preference/65925f3618d8349e5b99fc99",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data);
      cy.log(response.body.data);
    });
  });
});
