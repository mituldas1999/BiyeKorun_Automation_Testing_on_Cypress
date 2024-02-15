describe("As an user i should be able to get on the add push token from mobile application", () => {
  it("Checking if an user is able to get on the add push ", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/add-pushtoken",
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
