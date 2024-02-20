describe("As an admin I should be able to create staff role", () => {
  it("Checking if an admin can create staff role or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "POST",
      url: "/api/staff/role/create",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        name: "Test_Role",
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
      cy.log(response.body.data._id);
      const CreateRoleID = response.body.data._id;
      cy.log(CreateRoleID);
      cy.writeFile("cypress/fixtures/createRoleID.json", {
        CreateStaffroleId: CreateRoleID,
      });
    });
  });
});
