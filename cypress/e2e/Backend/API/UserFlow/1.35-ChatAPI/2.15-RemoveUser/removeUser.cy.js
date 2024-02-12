describe("As an user I can remove a user from channel", () => {
  let newUserChatId;
  let groupId;
  before(() => {
    cy.readFile("cypress/fixtures/chatUserId.json").then((data) => {
      newUserChatId = data.userChatId; //
      console.log(newUserChatId);
    });
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; //
    });
  });
  it("Checking if an user can remove an user from a channel or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: `/api/chat/channel/remove-user/${groupId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        member: `${newUserChatId}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
