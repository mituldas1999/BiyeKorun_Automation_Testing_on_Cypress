describe("As an user, I should be able to react on the message ", () => {
  let sentChatId;
  before(() => {
    cy.readFile("cypress/fixtures/sentChatId.json").then((data) => {
      sentChatId = data.sentId;
      console.log(sentChatId);
    });
  });
  it("Checking if a user can react on the chat user or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "PATCH",
      url: `/api/chat/update-status/${sentChatId}`,
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        status: "sent",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
