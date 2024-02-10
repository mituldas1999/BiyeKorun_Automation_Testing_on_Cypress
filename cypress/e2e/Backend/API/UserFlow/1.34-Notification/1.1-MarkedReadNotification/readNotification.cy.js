describe("User should be able get marked notification", () => {
  it("Checking if the user is getting marked notification or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/notification/mark-read/65925f3618d8349e5b99fc99",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {},
    })
      .its("status")
      .should("equal", 200);
  });
});
