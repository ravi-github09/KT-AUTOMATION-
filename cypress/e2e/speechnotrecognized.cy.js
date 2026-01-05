describe('Voice Search – Error case', () => {
  it('shows message when voice is not recognized', () => {

    cy.visit('index.html', {
      onBeforeLoad(win) {

        win.SpeechRecognition = win.webkitSpeechRecognition = class {
          start() {
            setTimeout(() => {
              this.onerror()
            }, 200)
          }
        }
      }
    })

    cy.get('#micBtn').click()
    cy.contains('Voice not recognized').should('be.visible')
  })
})
