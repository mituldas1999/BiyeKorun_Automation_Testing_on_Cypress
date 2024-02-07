describe("As an user I should be able to update my profile pic", () => {
  it("Checking if the user can update his profile pic or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/profile-image-upload",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        image: "WhatsApp Image 2023-12-09 at 12.28.56_ade94380.jpg",
        isVisible: true,
        isBlur: true,
      },
    }).then((response) => {
      console.log(response);
    });
  });
});
