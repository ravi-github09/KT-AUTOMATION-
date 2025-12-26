describe("YouTube Search Functionality", () => {

  it("Verify search results are displayed for a valid keyword", () => {


    cy.visit("https://www.youtube.com");

    
    cy.get("body", { timeout: 10000 }).then(($body) => {
      if ($body.find('button:contains("Accept")').length > 0) {
        cy.contains("Accept").click();
      }
    });

    
    cy.get('input[name="search_query"]', { timeout: 10000 })
      .should("be.visible")
      .type("Globallogic banglore{enter}");

    
    cy.url().should("include", "search_query");

    
    cy.get("ytd-video-renderer", { timeout: 10000 })
      .should("have.length.greaterThan", 0);

  });

});
