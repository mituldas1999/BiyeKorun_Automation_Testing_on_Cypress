describe("User should be able to create profile view", () => {
  it("Checking if an user can create profile view", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/create-view-profile",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        userId: "65925f3618d8349e5b99fc99", //should be another user id not own
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
