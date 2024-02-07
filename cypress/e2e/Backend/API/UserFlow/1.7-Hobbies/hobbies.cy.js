describe("User should be able to update their hobbies", () => {
  it("Checking if a user can update their hobbies", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/hobbies-interest",
      body: {
        interests: [
          {
            categories: "Creative",
            hobbies: ["Writing"],
          },
          {
            categories: "Fun",
            hobbies: ["Writing", "Music"],
          },
          {
            categories: "Fitness",
            hobbies: ["Cycling"],
          },
          {
            categories: "Others Interests",
            hobbies: ["Pets"],
          },
        ],
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .its("status")
      .should("equal", 201)
      .then((response) => {
        // Log the response body
        cy.log("Response Body:", response);

        // Add any additional assertions on the response body if needed
        // For example, you can check specific properties in the response body

        // ...
      });
  });
});
