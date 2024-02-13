describe("Checking if an admin update a default package or not", () => {
  it("Checking if an admin can update default package or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "PATCH",
      url: `/api/package/update/default/64eecac80620579ac6fb3204`,
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
