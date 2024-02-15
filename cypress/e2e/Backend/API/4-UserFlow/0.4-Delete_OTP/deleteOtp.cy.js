describe("As a user I can send OTP for deleted user", () => {
  it("Checking if an deleted user can get API or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/delete-otp",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        otpType: "email",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
