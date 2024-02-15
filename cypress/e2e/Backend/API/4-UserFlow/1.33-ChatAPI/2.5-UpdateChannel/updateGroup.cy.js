describe("As an user, I should be able to Update Group", () => {
  let groupId; // Declare groupId variable

  // Read the group ID from the file before the test runs
  before(() => {
    cy.readFile("cypress/fixtures/groupId.json").then((data) => {
      groupId = data.id; //
    });
  });

  it("Checking if a user can Update Group user or not", () => {
    const accessToken = Cypress.env("accessToken");

    // Use the groupId variable here
    cy.request({
      method: "PATCH",
      url: `/api/chat/channel/update/${groupId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        name: "Updated Group Name",
        description: "Updated Channel Description",
        isPublic: true,
        isReadOnly: false,
        avatar: "Updated Avatar URL",
      },
    }).then((res) => {
      expect(res.status).to.eq(200); // Verify that the request was successful
      cy.log(`Updated group ID: ${res.body.channel._id}`); // Log the updated group ID for confirmation
    });
  });
});
