describe("As an user, I should be able to see partner preference details", () => {
  it("Checking partner preference details", () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzExNjMzNCwiZXhwIjoxNzA3MjAyNzM0fQ.Q0560L8MilPeGRXztwhdFWsHATVTWon_OuoQ-jR5fbc";
    cy.request({
      method: "POST",
      url: "/api/user/getMatches",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        page: 1,
        limit: 1,
        sort_by: "newest",
        marital: "Never Married",
        motherLanguage: "Bengali (Bangla)",
        country: "Bangladesh",
        education: "BSC",
        skip: 0,
        isToday: false,
        isNew: false,
        religion: "all",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
