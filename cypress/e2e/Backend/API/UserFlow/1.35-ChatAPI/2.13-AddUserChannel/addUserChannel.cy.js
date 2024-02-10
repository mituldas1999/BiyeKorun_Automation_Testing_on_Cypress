describe("As an user, I should be able to add user on the Group", () => {
  let newUserId; // Declare newUserId variable
  before(() => {
    cy.readFile("cypress/fixtures/userId.json").then((data) => {
      newUserId = data.userId; // Store the group ID in the variable
      console.log(newUserId);
    });
  });
  it("Checking if a user can add user on the Group user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: `/api/chat/channel/adduser/${newUserId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        user: `${newUserId}`,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
