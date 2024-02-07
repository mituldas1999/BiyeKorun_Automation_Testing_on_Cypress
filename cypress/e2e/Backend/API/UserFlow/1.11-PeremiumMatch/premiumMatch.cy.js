describe("As a user I should be able to find the premium matches", () => {
  it("Checking if I can fing premium matches or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/premium-match",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        page: 1,
        sort_by: "newest",
        limit: 1,
        skip: 0,
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
