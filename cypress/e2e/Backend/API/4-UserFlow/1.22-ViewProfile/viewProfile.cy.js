describe("As an user I should be able see my own profile information", () => {
  it("Checking if an user can see its own profile information", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/user/view-profile",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
      cy.log(response.body.data);
    });
  });
});
