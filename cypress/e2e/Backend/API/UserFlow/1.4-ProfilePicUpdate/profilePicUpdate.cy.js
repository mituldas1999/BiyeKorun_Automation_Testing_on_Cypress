describe("As an user I should be able to update my profile pic", () => {
  it("Checking if the user can update his profile pic or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.fixture("images/happy.jpg", "base64").then((imageFile) => {
      // Create a Blob object from the base64-encoded image file
      const blob = Cypress.Blob.base64StringToBlob(imageFile, "image/jpeg");

      // Create a FormData object and append the Blob object
      const formData = new FormData();
      formData.append("image", blob, "happy.jpg");
      formData.append("isVisible", true);
      formData.append("isBlur", true);

      // Send the request with the FormData object
      cy.request({
        method: "PATCH",
        url: "/api/user/profile-image-upload",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      }).then((response) => {
        console.log(response);
      });
    });
  });
});
