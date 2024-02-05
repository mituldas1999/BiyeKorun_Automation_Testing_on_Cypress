describe("As an user, I should be able to create Initital chat", () => {
  it("Checking if a user can create Initital chat or not", () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzEyNjA3OCwiZXhwIjoxNzA3MjEyNDc4fQ.58vzNUr5o9LqZsxb4wj8isPgLVqWPNl_Y3_nY3Ot3w0";
    cy.request({
      method: "POST",
      url: "/api/chat/member/update",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        member: "65c0a4d2ebf53acbef2765e7",
        chat: "65c0a4d1ebf53acbef2765e5",
        actionType: "mute",
        selectedOption: 1,
        role: "admin",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
