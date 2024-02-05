describe("As an user, I should be able to search previous created accounts", () => {
  it("Checking if an user can search previous accounts", () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzExNjMzNCwiZXhwIjoxNzA3MjAyNzM0fQ.Q0560L8MilPeGRXztwhdFWsHATVTWon_OuoQ-jR5fbc";
    cy.request({
      method: "POST",
      url: "/api/user/search",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        page: 1,
        sort_by: "newest",
        limit: 1,
        skip: 0,
        query:
          "firstName/lastName/userId/city/residencyStatus/maritalStatus/workingWith/occupation/employer/education/college",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
