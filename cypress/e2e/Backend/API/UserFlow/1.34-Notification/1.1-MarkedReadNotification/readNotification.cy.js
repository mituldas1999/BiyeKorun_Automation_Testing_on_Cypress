describe("User should be able get marked notification", () => {
  it("Checking if the user is getting marked notification or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/notification/mark-read/65c0452febf53acbef27606e",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {},
    })
      .its("status")
      .should("equal", 200);
  });
});
