describe("As an user I should be able to update my email", () => {
  it("Checking if an user can update their email or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/update-email",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        email: "www.savage582@gmail.com",
        otp: "230445",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
