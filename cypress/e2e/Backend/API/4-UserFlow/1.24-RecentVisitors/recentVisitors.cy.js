describe("As an user I should be able see recent visitors profile information ", () => {
  it("Checking if an user can see recent visitor profile information", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/recent-visitors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
