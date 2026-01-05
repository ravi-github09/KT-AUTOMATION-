describe('Voice Search', () => {
  it('shows search text after voice input', () => {

    cy.visit('index.html', {
      onBeforeLoad(win) {

        win.SpeechRecognition = win.webkitSpeechRecognition = class {
          start() {
            setTimeout(() => {
              this.onresult({
                results: [[{ transcript: 'Hello, How are you ' }]]
              })
            }, 200)
          }
        }
      }
    })

    cy.get('#micBtn').click()

    cy.get('#query')
      .invoke('text')
      .should('match', /^Searching for:\s.+/)
  })
})
