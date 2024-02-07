describe("As an user, I should be able to update on the friend request status", () => {
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
        friendshipId: "65c0bd96ebf53acbef2766ae",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
