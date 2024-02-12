describe("User should be able to create admin Staff", () => {
  it("Checking if an user can create admin Staff", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "POST",
      url: "/api/staff/create",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        email: "ashrafulislamashik960@gmail.com",
        firstName: "Ashraful",
        lastName: "islamashik",
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
