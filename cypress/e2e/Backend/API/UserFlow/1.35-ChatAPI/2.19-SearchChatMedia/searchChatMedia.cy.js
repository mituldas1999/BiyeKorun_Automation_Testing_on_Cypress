describe("As an user, I should be able to Search Chats Media on the message ", () => {
  it("Checking if a user can Search Chats Media user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/chat/media/65c354acebf53acbef276b31",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        limit: 10,
        page: 11,
        type: "image/jpeg",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
