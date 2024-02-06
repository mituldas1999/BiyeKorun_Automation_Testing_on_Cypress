describe("As an user, I should be able to send ", () => {
  it("Checking if a user can search on the chat user or not", () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzEyNjA3OCwiZXhwIjoxNzA3MjEyNDc4fQ.58vzNUr5o9LqZsxb4wj8isPgLVqWPNl_Y3_nY3Ot3w0";
    cy.request({
      method: "PUT",
      url: "/api/chat/sendmessage/65c19fdbebf53acbef2766fe",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        text: "**Hello! My Name Is Mitul...**",
        files: "",
        parentMessage: "65c19fdbebf53acbef2766fe",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
