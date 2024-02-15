describe("As an user, I should be able to count total pending and accept requests", () => {
  it("Checking if an user can see his pending and accepted request", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/friendship-count",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response);
      cy.log(response.body.data);
    });
  });
});
