describe("As an user, I should be able to update on the friend request status", () => {
  let updatedFriendId;
  before(() => {
    cy.readFile("cypress/fixtures/updatedFriendId.json").then((data) => {
      updatedFriendId = data.newId; //
    });
  });
  it("Checking if the user can update the request status", () => {
    // There is an error in this code

    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/updatefriends",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        status: "accepted",
        friendshipId: `${updatedFriendId}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
