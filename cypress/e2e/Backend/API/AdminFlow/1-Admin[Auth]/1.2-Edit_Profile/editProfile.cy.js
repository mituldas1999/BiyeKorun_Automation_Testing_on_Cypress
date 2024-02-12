describe("As an user, I should be able to update on the admin profile", () => {
  let updatedFriendId;
  before(() => {
    cy.readFile("cypress/fixtures/updatedFriendId.json").then((data) => {
      updatedFriendId = data.newId; // Store the group ID in the variable
    });
  });
  it("Checking if the admin can update the request status", () => {
    // There is an error in this code

    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/admin/editprofile",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        firstName: "Mitul",
        lastName: "Das",
        gender: "Male",
        phone: "+8801949338805",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
