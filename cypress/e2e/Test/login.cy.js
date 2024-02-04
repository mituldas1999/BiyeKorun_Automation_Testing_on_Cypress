describe('User Login Successfully', () => { 
    it("Checking user login successflly",()=>{
        cy.request({
            method:"POST",
            url:"https://staging-api.biyekorun.us/user/login",
            body:{
                email: "ashrafulislamashik960@gmail.com",
                password: "Ashik@2430"
              }
        }).its("status")
        .should("equal", 200);
    })
 })