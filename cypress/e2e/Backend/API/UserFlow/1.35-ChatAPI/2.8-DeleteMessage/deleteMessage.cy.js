describe("As an user, I should be able to Update Messages ", () => {
  it("Checking if a user can Update on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/chat/update/message/65c1a034ebf53acbef27670d",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        text: "<p>Hello</p>",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
