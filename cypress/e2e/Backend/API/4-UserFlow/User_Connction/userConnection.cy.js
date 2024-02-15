describe("As a user I should be able to see my connections", () => {
  it("Checking if a user can see his connection or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/connections",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
