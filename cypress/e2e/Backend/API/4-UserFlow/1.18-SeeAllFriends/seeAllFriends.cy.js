describe("As a user I should be able to see all of my friends", () => {
  it("Checking if an user can see all his friends", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/invitefriendship/all?status =accepted",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
