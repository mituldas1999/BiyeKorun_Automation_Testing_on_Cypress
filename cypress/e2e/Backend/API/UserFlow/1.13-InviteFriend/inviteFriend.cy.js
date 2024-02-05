describe("As an user, I should be able to invite friend to use biye korun page", () => {
  it("Checking if a user can invite or not", () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzExNjMzNCwiZXhwIjoxNzA3MjAyNzM0fQ.Q0560L8MilPeGRXztwhdFWsHATVTWon_OuoQ-jR5fbc";
    cy.request({
      method: "POST",
      url: "/api/user/invitefriends",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: [
        {
          requester: "650bb6cf672c611b32bdd0cc",
          recipient: "65019a1a9bf876161137fca8",
        },
      ],
    })
      .its("status")
      .should("equal", 200);
  });
});
