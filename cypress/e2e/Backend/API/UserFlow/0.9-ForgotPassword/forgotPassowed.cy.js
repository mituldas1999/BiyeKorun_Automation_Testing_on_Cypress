describe("As an user I should be able set new password using forgot password function", () => {
  it("Checking if an user can set new password using forgot password function or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/forgotpassword",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        email: "ashrafulislamashik960@gmail.com",
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
