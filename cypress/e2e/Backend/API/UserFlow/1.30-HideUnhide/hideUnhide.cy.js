describe("As an user I should be able hide/unhide my status", () => {
  it("Checking if an user can hide/unhide their status or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/hide-unhide",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        status: true,
      },
    }).then((response) => {
      console.log(response);
      cy.log(response);
    });
  });
});
