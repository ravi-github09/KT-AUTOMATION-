describe("Login Functionality", ()=> {

    it("Verify login page",()=>{

       cy.visit("https://auth.tntsports.co.uk/login")

       
       cy.wait(1500)
       cy.get("button[id='onetrust-accept-btn-handler']",{timeout:6000}).click()
       
       cy.get('#email').type('7@p.com',{dealy:100})
       
       cy.get('#password').type('Ravi./123')
       
       cy.get("button[type='submit']").click()


    })

});

