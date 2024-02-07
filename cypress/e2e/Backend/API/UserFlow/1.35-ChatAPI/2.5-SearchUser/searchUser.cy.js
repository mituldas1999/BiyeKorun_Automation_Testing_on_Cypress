describe("As an user, I should be able to search on the chat user", () => {
  it("Checking if a user can search on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/chat/members/65c0a4d1ebf53acbef2765e5",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        query: "Search query like: Are you want",
        limit: 10,
        page: 1,
        lastId: "64f815c91868f02cdd57ad08",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
