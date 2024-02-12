describe("As an user, I should be able to search on the chat user", () => {
  let groupId;
  before(() => {
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; //
    });
  });
  it("Checking if a user can search on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: `/api/chat/members/${groupId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        limit: 10,
      },
    }).then((response) => {
      const newUserChatId = response.body.results[0]._id;
      cy.writeFile("cypress/fixtures/chatUserId.json", {
        userChatId: newUserChatId,
      });
      console.log(response.body.results);
    });
  });
});
