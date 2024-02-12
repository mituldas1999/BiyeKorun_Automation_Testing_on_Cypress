describe("Get Auth Token", () => {
  it("should obtain an authentication token", () => {
    cy.request({
      method: "POST",
      url: "/api/user/login",
      body: {
        email: "mituldas751@gmail.com",
        password: "Mitul@23",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const AdminAccessToken = response.body.token.accessToken;

      // Set the access token as an environment variable
      Cypress.env("AdminAccessToken", AdminAccessToken);
      console.log(response);
      console.log(AdminAccessToken);

      cy.log(AdminAccessToken);
    });
  });
});
