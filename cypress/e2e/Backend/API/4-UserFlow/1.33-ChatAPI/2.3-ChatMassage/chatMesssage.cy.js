describe("As an user,should be able to find new chats", () => {
  let chatId;
  before(() => {
    cy.readFile("cypress/fixtures/chatId.json").then((data) => {
      chatId = data.newChatId;
      console.log(chatId);
    });
  });
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
        chat: `${chatId}`,
        parentMessage: "65925f3618d8349e5b99fc99",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
