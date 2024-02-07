describe("As an user, I should be able to create Initital chat", () => {
  it("Checking if a user can create Initital chat or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/chat/member/update",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        member: "65c0a4d2ebf53acbef2765e7",
        chat: "65c0a4d1ebf53acbef2765e5",
        actionType: "mute",
        selectedOption: 1,
        role: "admin",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
