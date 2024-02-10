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
        recipient: "653ccfe0d43efb3921b7314b",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
