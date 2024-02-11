describe("As an user I should be able to update my profile picture", () => {
  it("Checking if an user can update his picture or not", () => {
    const accessToken = Cypress.env("accessToken");

    cy.fixture("images/happy.jpg", "base64").then((imageFile) => {
      const blob = Cypress.Blob.base64StringToBlob(imageFile, "image/jpeg");

      const formData = new FormData();
      formData.append("isVisible", true);
      formData.append("isBlur", true);

      cy.request({
        method: "PATCH",
        url: "/api/user/update-image/65c873db8323ed5398bee8e5",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      }).then((response) => {
        console.log(response.body);
        cy.log(response.body);
      });
    });
  });
});
