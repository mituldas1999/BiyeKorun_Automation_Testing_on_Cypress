describe("As an user, I should be able to Update Messages ", () => {
  it("Checking if a user can Update on the chat user or not", () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzEyNjA3OCwiZXhwIjoxNzA3MjEyNDc4fQ.58vzNUr5o9LqZsxb4wj8isPgLVqWPNl_Y3_nY3Ot3w0";
    cy.request({
      method: "PATCH",
      url: "/api/chat/update/message/65c1a034ebf53acbef27670d",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        text: "<p>Hello</p>",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
