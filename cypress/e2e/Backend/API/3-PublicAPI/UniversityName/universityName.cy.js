describe("As an user I should be able to find any University all over the world", () => {
  it("Checking if an user is able to find any University all over the world", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/global/university?name=Bangladesh",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
      cy.log(response.body);
    });
  });
});
