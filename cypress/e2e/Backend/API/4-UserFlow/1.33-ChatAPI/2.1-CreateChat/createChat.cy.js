describe("As an user, I should be able to create Initial chat", () => {
  it("Checking if a user can create Initial chat or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/chat/findorcreate/658cfb6823934d606b72b3ac",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: [],
    })
      .its("status")
      .should("equal", 200);
  });
});
