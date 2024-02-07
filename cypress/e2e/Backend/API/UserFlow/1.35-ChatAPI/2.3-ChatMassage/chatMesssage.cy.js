describe("As an user,should be able to find new chats", () => {
  it("Checking if a user can find new chats or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/chat/messages",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },

      body: {
        page: 1,
        chat: "65c0a4d1ebf53acbef2765e5",
        parentMessage: "65925f3618d8349e5b99fc99",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
