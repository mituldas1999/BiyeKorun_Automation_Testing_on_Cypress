describe("As an user, I should be able to add user on the Group", () => {
  it("Checking if a user can add user on the Group user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/chat/channel/adduser/65c32f19ebf53acbef2769db",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        user: "65c32f19ebf53acbef2769db",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
