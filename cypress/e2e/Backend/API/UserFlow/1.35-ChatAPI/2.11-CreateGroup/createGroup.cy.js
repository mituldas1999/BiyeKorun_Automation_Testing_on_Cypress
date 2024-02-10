describe("As an user, I should be able to create Group", () => {
  it("Checking if a user can create Group user or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/chat/channel/create",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        users: [
          "64eecac80620579ac6fb3204",
          "64eecac80620579ac6fb3204",
          "64eecac80620579ac6fb3204",
        ],
        name: "fssffddfsdfs833dfsddfgdfdfdf", // Ensure to change group name for uniqueness if needed
        description: "Channel/Group description",
        isPublic: true,
        isReadOnly: false,
      },
    }).then((res) => {
      cy.log(res.body.chat._doc._id);
      const groupId = res.body.chat._doc._id;
      cy.writeFile("cypress/fixtures/groupId.json", { id: groupId }); // Correct usage
    });
  });
});
