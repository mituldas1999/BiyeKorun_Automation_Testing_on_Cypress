describe("As an user I should be able to change my password", () => {
  it.skip("Checking if an user can change his password or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/changepassword",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        currentPassword: "Ashik@2432",
        newPassword: "Ashik@2433",
        confirmPassword: "Ashik@2433",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
