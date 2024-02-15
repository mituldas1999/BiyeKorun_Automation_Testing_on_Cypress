describe("As an user I should be able to see profile Status", () => {
    it("Checking if an user can see profile Status or not", () => {
        const accessToken = Cypress.env("accessToken");
        cy.request({
            method: "GET",
            url: "/api/user/profile-status",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }).then((response) => {
            console.log(response.body);
        });
    });
});