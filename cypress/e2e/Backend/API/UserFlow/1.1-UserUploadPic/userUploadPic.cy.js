describe("User can upload picture through API", () => {
  it("Checking the user can upload file through API", () => {
    const accessToken = Cypress.env("accessToken");

    // Load the image file using cy.fixture()
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
        method: "POST",
        url: "/api/user/uploadimage",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }).then((response) => {
        console.log(response);
      });
    });
  });
});
