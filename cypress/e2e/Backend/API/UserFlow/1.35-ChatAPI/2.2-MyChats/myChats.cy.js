describe("As an user, I should be able to create Initital chat", () => {
  it("Checking if a user can create Initital chat or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/chat/mychats",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: [],
    }).then((response) => {
      const chatId = response.body.chats[0]._id;
      const chatMemberId = response.body.chats[0].myData.user;
      console.log(response.body.chats[0].myData);
      cy.log(response.body.chats[0].myData);
      cy.writeFile("cypress/fixtures/chatId.json", { newChatId: chatId });
      cy.writeFile("cypress/fixtures/chatMemberId.json", {
        newChatMemberId: chatMemberId,
      });
    });
  });
});
