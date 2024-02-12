describe("As an admin, I can see the user statistic", () => {
  it("Checking if an admin can see all the user statistic or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "POST",
      url: "/api/dashboard/user-reg-statistics",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        startDate: "2023-09-01",
        endDate: "2023-10-03",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
