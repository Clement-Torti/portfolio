
describe('Managing Portfolio', () => {
  describe('Navigating through sections', () => {
    // beforeEach(() => {
    //   // Cypress starts out with a blank slate for each test
    //   // so we must tell it to visit our website with the `cy.visit()` command.
    //   // Since we want to visit the same URL at the start of all our tests,
    //   // we include it in our beforeEach function so that it runs before each test
    //   cy.visit('https://example.cypress.io/todo')
    // })

    it('Go to each sections of the portfolio', () => {
      cy.visit('http://localhost:4200/')

      cy.contains('About me').click()
      cy.url().should('include', '/aboutMe')

      cy.contains('Education').click()
      cy.url().should('include', '/education')

      cy.contains('Projects').click()
      cy.url().should('include', '/projects')

      cy.contains('Profesional experience').click()
      cy.url().should('include', '/profesionalExperience')

      cy.contains('Hobbies').click()
      cy.url().should('include', '/hobbies')

      cy.contains('Contact').click()
      cy.url().should('include', '/contact')
    })
  })
})
