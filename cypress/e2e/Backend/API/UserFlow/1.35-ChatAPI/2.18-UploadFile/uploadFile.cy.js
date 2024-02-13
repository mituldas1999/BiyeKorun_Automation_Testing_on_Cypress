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
      cy.request({
        method: "POST",
        url: "/api/chat/file",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data", // Set the correct Content-Type header
        },
        body: formData,
      }).then((response) => {
        // Check the response status code and the response body
        console.log(response);
      });
    });
  });
});
