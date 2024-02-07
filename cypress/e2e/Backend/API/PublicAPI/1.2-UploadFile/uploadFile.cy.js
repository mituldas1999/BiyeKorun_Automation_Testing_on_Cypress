describe("As an user I should be able to upload any file", () => {
  it("Checking if an user can upload any file or not", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/global/any-upload",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        file: "WhatsApp Image 2023-12-09 at 12.28.56_ade94380.jpg",
        directoryName: "image deali",
      },
    }).then((response) => {
      console.log(response);
    });
  });
});
