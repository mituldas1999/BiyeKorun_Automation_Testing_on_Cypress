describe("As a user I shuould be able see all user information", () => {
  it("Seeing all the user information", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
