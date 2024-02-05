describe("User can upload picture through API", () => {
  it("Checking the user can upload file through API", () => {
    const picPath =
      "C:\\Users\\TS4U\\OneDrive\\Pictures\\Saved Pictures\\New folder\\WhatsApp Image 2023-12-09 at 12.28.56_ade94380.jpg";
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzExNjMzNCwiZXhwIjoxNzA3MjAyNzM0fQ.Q0560L8MilPeGRXztwhdFWsHATVTWon_OuoQ-jR5fbc";

    cy.fixture(picPath, "binary").then((fileContent) => {
      // Make API request to upload image with access token in headers
      cy.request({
        method: "POST",
        url: "/api/user/uploadimage",
        body: fileContent,
        headers: {
          "Content-Type": "image/jpeg",
          Authorization: `Bearer ${accessToken}`, // Include the access token in the headers
          // Add any other necessary headers
        },
      }).then((response) => {
        // Assertions to check if the upload was successful
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("success").to.equal(true);
      });
    });
  });
});
