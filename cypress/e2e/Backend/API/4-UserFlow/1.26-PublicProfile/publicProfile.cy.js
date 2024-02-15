describe("As an user I should be able to see public profile", () => {
  it("Checking if an user can see public profile", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/public-profile",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data);
      cy.log(response.body.data);
    });
  });
});
