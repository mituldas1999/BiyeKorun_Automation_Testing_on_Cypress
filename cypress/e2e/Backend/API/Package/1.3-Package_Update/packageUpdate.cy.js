describe("As an user I should be able to update my package", () => {
  let packageId;
  before(() => {
    cy.readFile("cypress/fixtures/packageId.json").then((data) => {
      packageId = data.newId;
      console.log(packageId);
    });
  });
  it("Checking if an user can update their package or not", () => {
    const adminAccessToken = Cypress.env("adminAccessToken");
    cy.request({
      method: "PATCH",
      url: `/api/package/update/${packageId}`,
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
      console.log(response.body);
    });
  });
});
