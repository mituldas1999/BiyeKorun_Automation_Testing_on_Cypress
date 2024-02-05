describe("Get Auth Token", () => {
  it("should obtain an authentication token", () => {
    cy.request({
      method: "POST",
      url: "/api/user/login",
      body: {
        email: "ashrafulislamashik960@gmail.com",
        password: "Ashik@2430",
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // Assert that the response status is 200 OK
      cy.log("Token:", response.body.token); // Log the token (or however the token is returned in your response body)
    });
  });
});
