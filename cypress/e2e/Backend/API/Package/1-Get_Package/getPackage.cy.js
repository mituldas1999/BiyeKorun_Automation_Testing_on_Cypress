describe("As an user I should be able to see all the packages I have", () => {
  it("Checking if an user can see all the packages or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/package",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data);
    });
  });
});
