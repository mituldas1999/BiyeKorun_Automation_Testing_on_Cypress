describe("As an user, I should be able to see partner preference details", () => {
  it("Checking partner preference details", () => {
    const accessToken = Cypress.env("accessToken");
    cy.log("Access Token:", accessToken);
    cy.request({
      method: "POST",
      url: "/api/user/getMatches",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        page: 1,
        limit: 1,
        sort_by: "newest",
        marital: "Never Married",
        motherLanguage: "Bengali (Bangla)",
        country: "Bangladesh",
        education: "BSC",
        skip: 0,
        isToday: false,
        isNew: false,
        religion: "all",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
