describe("As an user I can remove a user from channel", () => {
  let newUserId; // Declare newUserId variable
  before(() => {
    cy.readFile("cypress/fixtures/userId.json").then((data) => {
      newUserId = data.userId; // Store the group ID in the variable
      console.log(newUserId);
    });
  });
  it("Checking if an user can remove an user from a channel or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: `/api/chat/channel/remove-user/${newUserId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        member: `${newUserId}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
