describe("As an user I should be able to show a single order item details", () => {
  let orderId
  before(() => {
    cy.readFile("cypress/fixtures/orderId.json").then((data) => {
      orderId = data.newOrderId; // Store the group ID in the variable
    });
  });
  it("Checking if an user can show a single order item details", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: `/api/user/orders/${orderId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
      cy.log(orderId);
    });
  });
});