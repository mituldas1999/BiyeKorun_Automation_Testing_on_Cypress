describe("Admin should be able to update user Staff", () => {
  let staffroleId;
  before(() => {
    cy.readFile("cypress/fixtures/staffroleId.json").then((data) => {
      staffroleId = data.AdminStaffroleId;
      cy.log(staffroleId); //
    });
  });
  it("Checking if an admin can update user Staff", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "PATCH",
      url: `/api/staff/role/edit/${staffroleId}`,
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        name: "Full Access",
        description: "Admin Role",
        permissions: {
          staff: {
            read: true,
            create: true,
            update: true,
            delete: true,
          },
          role: {
            read: true,
            create: true,
            update: true,
            delete: true,
          },
          setting: {
            read: true,
            create: true,
            update: true,
            delete: true,
          },
          package: {
            read: true,
            create: true,
            update: true,
            delete: true,
          },
          user: {
            read: true,
            create: true,
            update: true,
            delete: true,
          },
          payment: {
            read: true,
            create: true,
            update: true,
            delete: true,
          },
        },
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
