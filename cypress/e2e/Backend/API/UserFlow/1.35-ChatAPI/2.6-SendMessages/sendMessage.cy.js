describe("As an user, I should be able to send ", () => {
  let chatId;
  before(() => {
    cy.readFile("cypress/fixtures/chatId.json").then((data) => {
      chatId = data.newChatId;
      console.log(chatId);
    });
  });
  it("Checking if a user can search on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PUT",
      url: `/api/chat/sendmessage/${chatId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        text: "**Hello! My Name Is Mitul...**",
        files: "",
        parentMessage: "65c19fdbebf53acbef2766fe",
      },
    }).then((response) => {
      console.log(response.body.message._id);
      const sentChatId = response.body.message._id;
      cy.writeFile("cypress/fixtures/sentChatId.json", { sentId: sentChatId });
    });
  });
});
