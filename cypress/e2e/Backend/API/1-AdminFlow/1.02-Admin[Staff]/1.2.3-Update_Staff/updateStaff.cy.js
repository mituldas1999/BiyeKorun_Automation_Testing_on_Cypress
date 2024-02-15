import { faker } from "@faker-js/faker";
describe("Admin should be able to update user Staff", () => {
  let staffId;
  before(() => {
    cy.readFile("cypress/fixtures/staffId.json").then((data) => {
      staffId = data.AdminStaffId;
      cy.log(staffId); //
    });
  });
  it("Checking if an admin can update user Staff", () => {
    const newUserEmail = faker.internet.email();
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "PATCH",
      url: `/api/staff/update/${staffId}`,
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        email: newUserEmail,
        firstName: "Ashraful",
        lastName: "islamashik",
        permission: ["654607f34af87d306958c2eb"],
        phone: {
          number: "1949338805",
          countryCode: "880",
        },
        dateOfBirth: "2024-02-12",
        gender: "Male",
        password: "Ashik@2432",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
