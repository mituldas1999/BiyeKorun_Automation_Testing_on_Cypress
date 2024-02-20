describe("As an use I should be able to reset my password", () => {
  it.skip("Checking if an user can reset password or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/resetpassword",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        email: "ashrafulislamashik960@gmail.com",
        otp: "870884",
        password: "Ashik@2433",
        confirmPassword: "Ashik@2433",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
