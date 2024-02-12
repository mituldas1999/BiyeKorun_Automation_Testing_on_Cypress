describe("As a user I shuould be able see all staff information", () => {
  it("Seeing all the staff information", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "GET",
      url: "/api/staff/getall",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    }).then((response) => {
      console.log(response.body.data.staffs[0]._id);
      const staffId = response.body.data.staffs[1].user.id;
      cy.log(staffId); //
      cy.writeFile("cypress/fixtures/staffId.json", { AdminStaffId: staffId });
    });
  });
});
