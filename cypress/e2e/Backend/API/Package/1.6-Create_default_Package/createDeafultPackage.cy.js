describe("As an admin, I should be able to create default package for the user to install ", () => {
  it("Checking if an admin can create default package or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "POST",
      url: "/api/package/create/default",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        chat: {
          isLimit: true,
          totalLimit: 100,
        },
        viewContact: {
          isLimit: true,
          totalLimit: 100,
        },
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
