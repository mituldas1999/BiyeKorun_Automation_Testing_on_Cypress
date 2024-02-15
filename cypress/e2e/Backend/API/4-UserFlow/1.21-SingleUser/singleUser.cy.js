describe("As an user I should be able to see a single user information", () => {
  it("Checking if an user can a single user information", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/user-profile/65925f3618d8349e5b99fc99",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data);
      cy.log(response.body.data);
    });
  });
});
