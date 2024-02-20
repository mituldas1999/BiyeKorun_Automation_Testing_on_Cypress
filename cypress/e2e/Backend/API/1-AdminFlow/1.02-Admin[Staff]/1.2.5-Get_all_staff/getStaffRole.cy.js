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
      cy.log(response.body.data[0]._id);
      const staffroleId = response.body.data[0]._id;
      cy.log(staffroleId); //
      cy.writeFile("cypress/fixtures/staffroleId.json", {
        AdminStaffroleId: staffroleId,
      });
    });
  });
});
