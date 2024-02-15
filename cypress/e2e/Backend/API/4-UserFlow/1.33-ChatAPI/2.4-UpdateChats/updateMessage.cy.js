describe("As an user, I should be able to create Initial chat", () => {
  let newUserChatId;
  let groupId;
  before(() => {
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; //
    });
    cy.readFile("cypress/fixtures/chatUserId.json").then((data) => {
      newUserChatId = data.userChatId; //
      console.log(newUserChatId);
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
        member: `${newUserChatId}`,
        chat: `${groupId}`,
        actionType: "unmute",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
