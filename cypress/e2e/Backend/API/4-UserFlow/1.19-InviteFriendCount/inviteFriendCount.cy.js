describe("As an user I should be able to see how many invitation I have sent", () => {
  it("Checking if the user can see how many invitation he have sent", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/invite-friendship-count",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data);
      cy.log(response.body.data);
    });
  });
});
