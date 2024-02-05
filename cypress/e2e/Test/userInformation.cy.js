describe("User Information", () => {
  it("Geeting all user information", () => {
    cy.request("GET", "/api/user").its("status").should("equal", 200);
  });
});
