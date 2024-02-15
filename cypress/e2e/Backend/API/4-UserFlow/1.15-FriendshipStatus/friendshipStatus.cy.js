describe("As a user, I should be able to see all friends status information", () => {
  it("Checking if a user can see all the friendship status or not", () => {
    const accessToken = Cypress.env("accessToken");

    cy.request({
      method: "GET",
      url: "/api/user/friendship/all",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
  it("Checking if a user can see the pending friendship status", () => {
    const accessToken = Cypress.env("accessToken");

    cy.request({
      method: "GET",
      url: "/api/user/friendship/pending",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
  it("Checking if a user can see the accepted friendship status", () => {
    const accessToken = Cypress.env("accessToken");

    cy.request({
      method: "GET",
      url: "/api/user/friendship/accepted",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
  it("Checking if a user can see the declined friendship status", () => {
    const accessToken = Cypress.env("accessToken");

    cy.request({
      method: "GET",
      url: "/api/user/friendship/declined",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      console.log(response.body);
    });
  });
});
