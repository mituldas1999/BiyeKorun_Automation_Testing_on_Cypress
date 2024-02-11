describe("As an user I should be able to delete the picture I want", () => {
  it("Checking if an user can delete a picture or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "DELETE",
      url: "/api/user/deleteImage/65925f3618d8349e5b99fc99",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
      cy.log(response.body);
    });
  });
});
