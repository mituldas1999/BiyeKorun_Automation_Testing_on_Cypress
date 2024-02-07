describe("As an user I should be able to see all my profile photos", () => {
  it("Checking if an user can see all his profile photos", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/myphotos",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data[0].url);
      cy.log(response.body.data[0].url.small);
    });
  });
});
