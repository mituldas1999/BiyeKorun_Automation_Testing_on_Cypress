describe("User can upload file form chats through API", () => {
  it("Checking the user can upload file through API", () => {
    const accessToken = Cypress.env("accessToken");

    // Load the image file using cy.fixture()
    cy.fixture("file/Test_file.doc", "base64").then((docFile) => {
      // Create a Blob object from the base64-encoded image file
      // Ensure you use the correct MIME type for .doc files
      const blob = Cypress.Blob.base64StringToBlob(
        docFile,
        "application/msword"
      );

      // Create a FormData object and append the Blob object
      const formData = new FormData();
      formData.append("file", blob, "Test_file.doc");

      // Send the request with the FormData object
      // Note: 'Content-Type' header may need to be removed or modified
      cy.request({
        method: "POST",
        url: "/api/chat/file",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data", // This line might need to be removed or modified
        },
        body: formData,
        // Adding 'form: true' to indicate the body is a FormData object
        // Note: This is specific to how Cypress handles FormData
        // form: true,
      }).then((response) => {
        console.log(response);
      });
    });
  });
});
