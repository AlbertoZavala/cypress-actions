describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('validate header title', () => {
    cy.get('h1').should('have.text', 'Kitchen Sink')
  })

  it('validate sub title', () => {    
    cy.get(':nth-child(3) > .container > .row > #utilities > h2').should('have.text', 'Commands')
  })
})