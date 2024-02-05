describe("Changing Password", () => {
  it.skip("Let the user change paswword", () => {
    cy.request({
      method: "PATCH",
      url: "https://staging-api.biyekorun.us/user/changepassword/ashrafulislamashik960@gmail.com",
      body: {
        currentPassword: "Ashik@2430",
        newPassword: "Ashik@2431",
        confirmPassword: "Ashik@2431",
      },
    }).its("status").should("equal", 200)
  });
});
