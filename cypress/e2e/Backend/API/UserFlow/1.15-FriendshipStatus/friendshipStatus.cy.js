describe("As a user, I should be able to see all friends status information", () => {
  it("Checking if a user can see the friendship status", () => {
    const accessToken = Cypress.env("accessToken");

    cy.request({
      method: "GET",
      url: "/api/user/friendship/all",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
