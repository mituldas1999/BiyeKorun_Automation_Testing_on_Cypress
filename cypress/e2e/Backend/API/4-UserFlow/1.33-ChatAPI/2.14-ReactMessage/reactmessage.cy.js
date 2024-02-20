describe("As an user, I should be able to react on the message ", () => {
  it("Checking if a user can react on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PUT",
      url: "/api/chat/react/65c1a034ebf53acbef27670d",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        symbol: "🥰",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
