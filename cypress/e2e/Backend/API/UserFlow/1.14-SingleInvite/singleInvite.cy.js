describe("As an user,I should be able to see on the single invite", () => {
  it("Checking if an user can see a single invite", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/single-invite",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        recipient: "65643ae458b1b3bb5210f611",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
