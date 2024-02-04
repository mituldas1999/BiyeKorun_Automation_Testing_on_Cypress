describe('User Login Successfully', () => { 
    it.skip("Checking user login successflly",()=>{
        cy.request({
            method:"POST",
            url:"https://api.biyekorun.us/api/user/login",
            body:{
                email: "ashrafulislamashik960@gmail.com",
                password: "Ashik@2430"
              }
        }).its("status")
        .should("equal", 200);
    })

 })