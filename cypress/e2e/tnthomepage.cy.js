describe("Verify Home page layout",()=>{

   it("Verifying the home page layout like hero card,planner rail etc",()=>{

         cy.visit("https://www.tntsports.co.uk/")

         

         cy.get("div[class='relative min-h-[310px] w-full']",{timeout:5000}).should('be.visible')
         
         cy.get('.pt-tk-space-rs-padding-lg > :nth-child(2) > .group',{timeout :5000}).should('be.visible')

         cy.get(':nth-child(4) > .group',{timeout:5000}).should('be.visible')

         cy.get(':nth-child(6) > .group',{timeout :5000}).should('be.visible')

         cy.get(':nth-child(8) > .group',{timeout :5000}).should('be.visible')

       
         cy.wait(5000)
         cy.scrollTo(0,900)
         cy.wait(300)
         cy.scrollTo(0,1600)
         cy.wait(300)

         cy.get(':nth-child(9) > [data-testid="generic-rail-block"] > :nth-child(1) > .-common-container > :nth-child(1) > .gap-tk-between-elements-xl > [data-testid="organism-carousel"] > [data-testid="carousel-track"]').should('be.visible')
         cy.wait(10000)
         
         cy.get('#_r_v_ > .storyteller-bq7AJb > .storytellerContainer-VXwt8t',{timeout:5000}).should('be.visible')
         
         cy.scrollTo(0,5000)
         cy.wait(1000)
         cy.scrollTo(0,8500)
         cy.wait(3000)

         cy.get("button[aria-label='Most Read']").should('be.visible').click()
         cy.wait(10000)
         cy.get("button[aria-label='Most Watched']").should('be.visible').click()
      }) 

});