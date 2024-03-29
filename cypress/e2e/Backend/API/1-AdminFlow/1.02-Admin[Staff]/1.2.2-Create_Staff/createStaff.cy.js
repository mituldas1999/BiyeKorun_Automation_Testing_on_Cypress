describe("Admin should be able to create Staff from the existing users", () => {
  let newUser;
  before(() => {
    cy.readFile("cypress/fixtures/user.json").then((data) => {
      newUser = data.userEmail;
      console.log(newUser);
    });
  });
  it("Checking if an admin can create staff using existing users", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "POST",
      url: "/api/staff/create",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        email: `${newUser}`,
        firstName: "Ashraful",
        lastName: "Islam ashik",
        permission: ["64eadb6a5bd5576dd4df3cd8"],
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
