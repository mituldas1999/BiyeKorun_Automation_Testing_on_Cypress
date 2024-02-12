describe("As an user, I should be able to add user on the Group", () => {
  let newUserId;
  let groupId;
  before(() => {
    cy.readFile("cypress/fixtures/userId.json").then((data) => {
      newUserId = data.userId; //
      console.log(newUserId);
      cy.log(newUserId);
    });
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; //
    });
  });
  it("Checking if a user can add user on the Group user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: `/api/chat/channel/adduser/${groupId}`,
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
