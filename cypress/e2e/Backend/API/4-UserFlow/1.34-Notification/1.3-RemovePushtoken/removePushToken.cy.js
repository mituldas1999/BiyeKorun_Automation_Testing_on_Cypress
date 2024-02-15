describe("As an user i should be able to get on the remove push token from mobile application", () => {
  it("Checking if an user is able to remove push token from the mobile application", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/remove-pushtoken",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        pushToken: "string",
      },
    }).then((response) => {
      cy.log(response.body);
      console.log(response.body);
    });
  });
});
