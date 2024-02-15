describe("As an user I should be able to get all the notifications", () => {
  it("Checking if an user can get all his notification or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "GET",
      url: "/api/notification/my-notifications",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      const notificationId = response.body.data[0]._id;
      console.log(response.body.data[0]);
    });
  });
});
