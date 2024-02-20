describe("As an Admin I should be able to edit my profile", () => {
  it("Checking if an admin can edit his profile or not", () => {
    // There is an error in this code
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.log(adminAccessToken);
    cy.request({
      method: "PATCH",
      url: "/api/admin/editprofile",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        firstName: "DAS",
        lastName: "Mitul",
        gender: "Male",
        phone: {
          number: "1775069169",
          countryCode: "880",
        },
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
