describe("User should be able to update their search preference", () => {
  it("Checking if a user can update their preference", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "PATCH",
      url: "/api/user/partner-preferences",
      body: {
        minAge: "18",
        maxAge: "35",
        minHeight: "60",
        maxHeight: "68",
        maritalStatus: ["Never Married"],
        religion: ["Islam"],
        community: ["Bengali", "English", "French"],
        nativeLanguage: ["Bangla"],
        country: ["Bangladesh"],
        residencyStatus: ["Citizen"],
        qualification: ["Bachelor Degree"],
        workingWith: ["Private Company"],
        profession: ["Software Engineer"],
        minIncome: "20000",
        maxIncome: "200000",
        postedBy: ["Self"],
        diet: ["Vegiterian"],
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      cy.log("Response Body:", response.body);
      console.log(response.body);
    });
  });
});
