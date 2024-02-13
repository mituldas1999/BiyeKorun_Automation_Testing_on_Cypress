describe("Admin should be able to Delete user Staff member", () => {
  let deleteRole;
  before(() => {
    cy.readFile("cypress/fixtures/createRoleID.json").then((data) => {
      deleteRole = data.CreateStaffroleId;
      cy.log(deleteRole); //
    });
  });
  //Please Remove Skip ................
  it("Checking if an user can Delete admin Staff", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "DELETE",
      url: `/api/staff/role/delete/${deleteRole}`,
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
