describe("As an user, I should be able to Archived Channel on the message ", () => {
  it("Checking if a user can Archived Channel user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/chat/channel/archive/65c354acebf53acbef276b31",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        isArchived: true,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
