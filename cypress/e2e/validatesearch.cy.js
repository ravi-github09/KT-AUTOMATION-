describe("Search Functionality",()=>{

   it("Validate valid keyword on search option",()=>{

    cy.visit("https://www.tntsports.co.uk/")

    cy.wait(10500)
    cy.get("a[class='flex relative items-center bg-transparent px-tk-rs-padding-xs transition-colors hover:bg-ui-primary-hover active:bg-ui-primary'] svg").click()
  
    cy.wait(10000)
    cy.get('#search-input').clear().type('football{enter}')
    cy.wait(15000)
    cy.get("div[id='content'] button:nth-child(2)").click()
    cy.wait(10000)
    cy.get("div[id='content'] button:nth-child(3)").click()

   })

});