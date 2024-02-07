describe("As an user, I should be able to Update Group", () => {
  it("Checking if a user can Update Group user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/chat/channel/update/65c33507ebf53acbef276a6b",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        name: "fs",
        description: "Channel",
        isPublic: true,
        isReadOnly: false,
        avatar: "Avatar URL",
      },
    }).then((res) => {
      console.log(res.body.channel._id);
      cy.log(res.body.channel._id);
    });
  });
});
