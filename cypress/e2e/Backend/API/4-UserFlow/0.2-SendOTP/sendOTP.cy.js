describe("As an user I can send an OTP with email", () => {
  it.skip("Checking if an user can send OTP or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/resendotp",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        email: "ashrafulislamashik960@gmail.com",
        otpType: "email",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
