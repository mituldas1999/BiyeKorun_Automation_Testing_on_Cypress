describe("User should be able to Delete admin Staff", () => {
  let staffId;
  before(() => {
    cy.readFile("cypress/fixtures/staffId.json").then((data) => {
      staffId = data.AdminStaffId;
      cy.log(staffId); // Store the group ID in the variable
    });
  });
  //Please Remove Skip ................
  it.skip("Checking if an user can Delete admin Staff", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "DELETE",
      url: `/api/staff/delete/${staffId}`,
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
