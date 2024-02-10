describe("As an user, I should be able to join Channel", () => {
  let groupId; // Declare groupId variable

  // Read the group ID from the file before the test runs
  before(() => {
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; // Store the group ID in the variable
    });
  });
  it("Checking if a user can join Channel user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PUT",
      url: `/api/chat/react/${groupId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        symbol: "🥰",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
