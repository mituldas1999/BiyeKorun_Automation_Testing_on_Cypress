describe("As an user I should be able to get contact information", () => {
  it("Checking if a user can get contact information or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/get-contact/65925f3618d8349e5b99fc99",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data);
      cy.log(response.body.data);
    });
  });
});
