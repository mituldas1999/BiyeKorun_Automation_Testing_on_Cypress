describe("As an user I should be able to delete the picture I want", () => {
  it.skip("Checking if an user can delete a picture or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "DELETE",
      url: "/api/user/deleteImage/65c9832f8323ed5398bef403",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
      cy.log(response.body);
    });
  });
});
