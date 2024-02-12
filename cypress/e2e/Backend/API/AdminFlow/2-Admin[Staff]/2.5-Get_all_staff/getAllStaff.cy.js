describe("As an admin I should be able to see all the staff information", () => {
  it("Checking if an admin can get all the information or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "GET",
      url: "/api/staff/role/get",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
