describe("As an user I should be able to update my profile picture", () => {
  it("Checking if an user can update his picture or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/update-image/65c35276ebf53acbef276b10",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        isBlur: true,
        isVisible: true,
      },
    }).then((response) => {
      console.log(response.body);
      cy.log(response.body);
    });
  });
});
