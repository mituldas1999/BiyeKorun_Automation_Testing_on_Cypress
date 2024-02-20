describe("As an user, I should be able to create Initital chat", () => {
  it("Checking if a user can create Initital chat or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/chat/mychats",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      const chatId = response.body.chats[0]._id;
<<<<<<< HEAD:cypress/e2e/Backend/API/UserFlow/1.35-ChatAPI/2.2-MyChats/myChats.cy.js
      const chatMemberId = response.body.chats[0].myData.user;
      console.log(response.body.chats[0].myData);
      cy.log(response.body.chats[0].myData);
=======
      const chatMemberId = response.body.chats[0]._id;
      console.log(response.body);
>>>>>>> 5c580205bd22bb0a5a2637f11b63edd62b63f76c:cypress/e2e/Backend/API/4-UserFlow/1.33-ChatAPI/2.2-MyChats/myChats.cy.js
      cy.writeFile("cypress/fixtures/chatId.json", { newChatId: chatId });
      cy.writeFile("cypress/fixtures/chatMemberId.json", {
        newChatMemberId: chatMemberId,
      });
    });
  });
});
