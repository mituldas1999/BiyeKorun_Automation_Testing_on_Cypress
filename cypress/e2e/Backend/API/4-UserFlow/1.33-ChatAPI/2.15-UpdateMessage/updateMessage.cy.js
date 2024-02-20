describe("As an user, I should be able to Update Messages ", () => {
  let sentChatId;
  before(() => {
    cy.readFile("cypress/fixtures/sentChatId.json").then((data) => {
      sentChatId = data.sentId;
      console.log(sentChatId);
    });
  });
  it("Checking if a user can Update on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: `/api/chat/update/message/${sentChatId}`,
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
