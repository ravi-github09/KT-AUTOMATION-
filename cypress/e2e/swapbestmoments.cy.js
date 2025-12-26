describe("Best Moments Scroll Functionality",()=>{

   it("Verify the swapping Functinality of Best Moments",()=>{

    cy.visit("https://www.tntsports.co.uk/")

    cy.wait(500)
    cy.get("body > div:nth-child(37) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click()
    cy.wait(6000)
    cy.get("div[id='content'] div[class='common-container'] a:nth-child(1)").click()

    cy.get('.customSwiper-Gog4at').scrollIntoView().click({force:true});
    cy.wait(1500)
    
    const scrollCount = 10

    for (let i = 0; i < scrollCount; i++) {
     cy.wait(5000)
     cy.get('body').type('{downarrow}')
         }



   })

});