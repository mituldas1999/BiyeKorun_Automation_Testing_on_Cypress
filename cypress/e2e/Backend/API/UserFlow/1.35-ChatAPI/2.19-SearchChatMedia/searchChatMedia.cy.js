describe("As an user, I should be able to Search Chats Media on the message ", () => {
  let newUserId; // Declare newUserId variable
  before(() => {
    cy.readFile("cypress/fixtures/userId.json").then((data) => {
      newUserId = data.userId; // Store the group ID in the variable
      console.log(newUserId);
    });
  });
  it("Checking if a user can Search Chats Media user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: `/api/chat/media/${newUserId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        limit: 10,
        page: 11,
        type: "image/jpeg",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
