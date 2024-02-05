describe('User Information', () => { 
    it('Geeting all user information', () => {
        cy.request("GET", "https://staging-api.biyekorun.us/api/user").its("status").should("equal", 200)
    });
 })