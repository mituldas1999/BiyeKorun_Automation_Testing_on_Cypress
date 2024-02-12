describe("As an user,I should be able to see on the single invite", () => {
  let newUserId; // Declare newUserId variable
  before(() => {
    cy.readFile("cypress/fixtures/userId.json").then((data) => {
      newUserId = data.userId; //
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
    }).then((response) => {
      const updatedFriendId = response.body.data._id;
      console.log(response.body.data._id);
      cy.writeFile("cypress/fixtures/updatedFriendId.json", {
        newId: updatedFriendId,
      });
      console.log(updatedFriendId);
    });
  });
});
