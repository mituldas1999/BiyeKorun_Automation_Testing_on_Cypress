describe("As an user, I should be able to Search Chats Media on the message ", () => {
  let sentChatId;
  before(() => {
    cy.readFile("cypress/fixtures/sentChatId.json").then((data) => {
      sentChatId = data.sentId;
      console.log(sentChatId);
    });
  });
  it("Checking if a user can Search Chats Media user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/chat/media/65c9d091c6a9b0c218a595cf",
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
