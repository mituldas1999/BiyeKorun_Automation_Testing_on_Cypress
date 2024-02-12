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
      console.log(chatId);
      cy.writeFile("cypress/fixtures/chatId.json", { newChatId: chatId });
    });
  });
});
