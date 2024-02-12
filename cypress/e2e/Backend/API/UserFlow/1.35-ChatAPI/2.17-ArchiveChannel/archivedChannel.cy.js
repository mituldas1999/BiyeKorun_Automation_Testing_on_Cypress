describe("As an user, I should be able to Archived Channel on the message ", () => {
  let groupId; // Declare groupId variable

  // Read the group ID from the file before the test runs
  before(() => {
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; //
    });
  });
  it("Checking if a user can Archived Channel user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",

      url: `/api/chat/channel/archive/${groupId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        isArchived: true,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
