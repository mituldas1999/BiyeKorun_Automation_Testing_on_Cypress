describe("As an user I should get OTP for mobile update", () => {
  let newUserEmail; // Declare newUserId variable
  before(() => {
    cy.readFile("cypress/fixtures/user.json").then((data) => {
      newUserEmail = data.userEmail; // Store the group ID in the variable
      console.log(newUserEmail);
    });
  });
  it.skip("Checking if an user can get OTP for mobile update or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/otp-send",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        email: `${newUserEmail}`,
        otpType: "email",
      },
    }).then((response) => {
      console.log(response.body.data);
      cy.log(response.body.data);
    });
  });
});
