describe("As an user, I should be able to send ", () => {
  it("Checking if a user can search on the chat user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PUT",
      url: "/api/chat/sendmessage/65c19fdbebf53acbef2766fe",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        text: "**Hello! My Name Is Mitul...**",
        files: "",
        parentMessage: "65c19fdbebf53acbef2766fe",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
