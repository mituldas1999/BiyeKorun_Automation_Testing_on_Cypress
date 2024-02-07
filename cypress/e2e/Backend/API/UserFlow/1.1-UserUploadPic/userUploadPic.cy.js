describe("User can upload picture through API", () => {
  it("Checking the user can upload file through API", () => {
    const accessToken = Cypress.env("accessToken");
    cy.request({
      method: "POST",
      url: "/api/user/uploadimage",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        image:
          "/C:/Users/TS4U/OneDrive/Pictures/Saved Pictures/New folder/WhatsApp Image 2023-12-09 at 12.28.56_ade94380.jpg",
        isVisible: true,
        isBlur: true,
      },
    }).then((response) => {
      console.log(response);
    });
  });
});
