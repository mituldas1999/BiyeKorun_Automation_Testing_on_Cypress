describe("As an admin, I can see the dashboard information", () => {
  it("Checking if an admin can see the dashboard information or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "GET",
      url: "/api/dashboard/info",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
