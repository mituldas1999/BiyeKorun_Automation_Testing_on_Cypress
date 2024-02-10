describe("As an user I can request for resend OTP if my email is not verified", () => {
  it.skip("Checking if an user can resend OTP", () => {
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
