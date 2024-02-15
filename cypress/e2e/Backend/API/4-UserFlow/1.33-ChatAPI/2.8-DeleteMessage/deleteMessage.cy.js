describe("As an user, I should be able to delete Messages ", () => {
  let sentChatId;
  let newUserChatId;
  let groupId;
  before(() => {
    cy.readFile("cypress/fixtures/sentChatId.json").then((data) => {
      sentChatId = data.sentId;
      console.log(sentChatId);
    });
    cy.readFile("cypress/fixtures/chatUserId.json").then((data) => {
      newUserChatId = data.userChatId; //
      console.log(newUserChatId);
    });
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; //
    });
  });
  it("Checking if a user can delete on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "DELETE",
      url: `/api/delete/message/${sentChatId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
