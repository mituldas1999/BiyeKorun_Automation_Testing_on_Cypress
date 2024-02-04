describe("User can register successfully", () => {
    it.skip("User should register successfully", () => {
      cy.request({
        method: "POST",
        url: "https://api.biyekorun.us/api/user/register",
        body: {
          email: "test5@gmail.com",
          firstName: "Ashraf",
          lastName: "Ashik",
          dateOfBirth: "2024-02-04",
          gender: "confidencial",
          postedBy: "Myself",
          language: ["Bangla", "English", "Urdu"],
          country: "Bangladesh",
          religion: "Islam",
          password: "Ashik@2430",
        },
      })
        .its("status")
        .should("equal", 200);
    });
  });
  