describe("As an user I can verify my OTP", () => {
  it.skip("Checking if an user can verify the OTP or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/verifyotp",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        otp: "714120",
        email: "ashrafulislamashik960@gmail.com",
        otpType: "email",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
