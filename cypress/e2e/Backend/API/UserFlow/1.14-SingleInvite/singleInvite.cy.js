describe("As an user,I should be able to see on the single invite", () => {
  let newUserId; // Declare newUserId variable
  before(() => {
    cy.readFile("cypress/fixtures/userId.json").then((data) => {
      newUserId = data.userId; // Store the group ID in the variable
      console.log(newUserId);
    });
  });
  it("Checking if an user can see a single invite", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/single-invite",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        recipient: `${newUserId}`,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
