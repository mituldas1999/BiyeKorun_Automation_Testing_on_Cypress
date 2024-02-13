describe("As an user, I should be able to create Initial chat", () => {
  let chatId;
  let chatMemberId;
  before(() => {
    cy.readFile("cypress/fixtures/chatId.json").then((data) => {
      chatId = data.newChatId;
      console.log(chatId);
    });
    cy.readFile("cypress/fixtures/chatMemberId.json").then((data) => {
      chatMemberId = data.newChatMemberId;
      console.log(chatMemberId);
    });
  });
  it("Checking if a user can create Initial chat or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/chat/member/update",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        member: `${chatMemberId}`,
        chat: `${chatId}`,
        actionType: "mute",
        selectedOption: 1,
        role: "admin",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
