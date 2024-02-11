describe("As an user I should be able to see my all orders", () => {
    it("Checking if an user can get all his orders or not", () => {
        const accessToken = Cypress.env("accessToken");
        cy.request({
            method: "GET",
            url: "/api/user/orders",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }).then((response) => {
            console.log(response.body);
            cy.log(response.body.data[0]._id)
            const orderId = response.body.data[0]._id
            cy.writeFile("cypress/fixtures/orderId.json", {
                newOrderId: orderId,
            });
            cy.log(orderId)
        });
    });
});