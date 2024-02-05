describe("As a user, I should be able to see all friends status information", () => {
  it("Checking if a user can see the friendship status", () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNocmFmdWwgSXNsYW0iLCJsYXN0TmFtZSI6IkFzaGlrIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzExNjMzNCwiZXhwIjoxNzA3MjAyNzM0fQ.Q0560L8MilPeGRXztwhdFWsHATVTWon_OuoQ-jR5fbc";
    const accessToken1 = Cypress.env("accessToken");
    cy.log("Access Token:", accessToken1);

    cy.request({
      method: "GET",
      url: "/api/user/friendship/all",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      const friendData = response.body.data;
      cy.log("Response Body:", response.body.success);

      cy.log("Number of friends:", friendData);
    });
  });
});
