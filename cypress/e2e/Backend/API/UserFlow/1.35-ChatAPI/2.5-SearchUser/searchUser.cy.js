describe("As an user, I should be able to search on the chat user", () => {
  it("Checking if a user can search on the chat user or not", () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzEyNjA3OCwiZXhwIjoxNzA3MjEyNDc4fQ.58vzNUr5o9LqZsxb4wj8isPgLVqWPNl_Y3_nY3Ot3w0";
    cy.request({
      method: "POST",
      url: "/api/chat/members/65c0a4d1ebf53acbef2765e5",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        query: "Search query like: Are you want",
        limit: 10,
        page: 1,
        lastId: "64f815c91868f02cdd57ad08",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
