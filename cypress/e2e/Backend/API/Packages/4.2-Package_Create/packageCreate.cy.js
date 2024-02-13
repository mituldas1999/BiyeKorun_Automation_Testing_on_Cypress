describe("As an user I should be able to purchases package", () => {
  it("Checking if an user can purchase any package or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "POST",
      url: "/api/package/create",
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
      body: {
        name: "Gold",
        description: "Something New",
        price: "8000",
        discountPrice: "5000",
        usdPrice: "8000",
        usdDiscountPrice: "5000",
        duration: 3,
        badgeName: "Top Seller",
        benefits: [
          {
            name: "3 Biye Korun Live Passes",
            isActive: true,
          },
        ],
        permission: {
          chat: {
            name: "Send 100 Message",
            isLimit: true,
            totalLimit: 100,
            isActive: true,
          },
          viewContact: {
            name: "View up to 75 Contact Numbers",
            isLimit: true,
            totalLimit: 75,
            isActive: true,
          },
        },
      },
    }).then((response) => {
      console.log(response.body.data._id);
      const packageId = response.body.data._id;
      cy.writeFile("cypress/fixtures/packageId.json", {
        newId: packageId,
      });
      console.log(packageId);
    });
  });
});
