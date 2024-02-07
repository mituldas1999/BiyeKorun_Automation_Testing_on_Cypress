describe("As an user, I should be able to invite friend to use biye korun page", () => {
  it("Checking if a user can invite or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/invitefriends",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: [
        {
          requester: "650bb6cf672c611b32bdd0cc",
          recipient: "65019a1a9bf876161137fca8",
        },
      ],
    })
      .its("status")
      .should("equal", 200);
  });
});
