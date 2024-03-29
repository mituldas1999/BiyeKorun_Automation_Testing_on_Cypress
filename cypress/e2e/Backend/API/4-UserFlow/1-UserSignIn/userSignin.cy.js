describe("Get Auth Token", () => {
  it("should obtain an authentication token", () => {
    cy.request({
      method: "POST",
      url: "/api/user/login",
      body: {
        email: "dasia_nitzsche@hotmail.com",
        password: "Ashik@2430",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const accessToken = response.body.token.accessToken;

      // Set the access token as an environment variable
      Cypress.env("accessToken", accessToken);
      console.log(response);
      console.log(accessToken);

      cy.log(accessToken);
    });
  });
});

// Your test file
// describe("Get Auth Token", () => {
//   it("should obtain an authentication token", () => {
//     cy.loginAndGetAccessToken("ashrafulislamashik960@gmail.com", "Ashik@2430");
//   });
// });
