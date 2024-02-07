describe("As an user, I should be able to search previous created accounts", () => {
  it("Checking if an user can search previous accounts", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/search",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        page: 1,
        sort_by: "newest",
        limit: 1,
        skip: 0,
        query:
          "firstName/lastName/userId/city/residencyStatus/maritalStatus/workingWith/occupation/employer/education/college",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
