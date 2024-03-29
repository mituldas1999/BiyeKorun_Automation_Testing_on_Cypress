describe("As an admin I would be able to see all the payments", () => {
  it("Checking if the admin can see all the payment information or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "POST",
      url: "/api/payment/get-all-payments",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        page: 1,
        limit: 1,
        skip: 0,
        sort_by: "newest",
      },
    }).then((response) => {
      console.log(response.body.data);
      cy.log(response.body.data);
    });
  });
});
