describe("As an user I can leave a chat group", () => {
  let newUserId;
  let groupId;
  before(() => {
    cy.readFile("cypress/fixtures/userId.json").then((data) => {
      newUserId = data.userId; // Store the group ID in the variable
      console.log(newUserId);
    });
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; // Store the group ID in the variable
    });
  });
  it("Checking if an user can leave a chat group or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: `/api/chat/channel/leave/${groupId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        user: `${newUserId}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
