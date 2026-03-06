describe('J. Worden Asphalt Paving', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the hero heading', () => {
    cy.get('h1')
    .contains('Professional Asphalt Paving You Can Trust');
  })

  it('displays the services section', () => {
    cy.get('#services')
    .should('be.visible');
  })

  it('displays the contact form', () => {
    cy.get('.contact-form')
    .should('be.visible');
  })
})
