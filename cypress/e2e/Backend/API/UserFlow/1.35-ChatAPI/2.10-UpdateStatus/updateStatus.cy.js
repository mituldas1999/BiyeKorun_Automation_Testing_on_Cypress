describe("As an user, I should be able to react on the message ", () => {
  let sentChatId;
  before(() => {
    cy.readFile("cypress/fixtures/sentChatId.json").then((data) => {
      sentChatId = data.sentId;
      console.log(sentChatId);
    });
  });
  it("Checking if a user can react on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: `/api/chat/update-status/${sentChatId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        status: "sent",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
