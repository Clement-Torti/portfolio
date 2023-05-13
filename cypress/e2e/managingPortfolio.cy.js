
describe('Managing Portfolio', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:4200/")
  })
  
  describe('Navigating through sections', () => {
    it('Go to each sections of the portfolio', () => {
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


  describe('About me section', () => {
    it('Show my information', () => {
      cy.contains('About me').click()

      cy.get('[data-id=profilePicture]').should('exist')
      cy.get('[data-id=fullNameLabel]').should('exist')
      cy.get('[data-id=jobLabel]').should('exist')

      cy.get('[data-id=nationalityLabel]').should('exist')
      cy.get('[data-id=ageLabel]').should('exist')
      cy.get('[data-id=drivingLicenseLabel]').should('exist')

      cy.get('[data-id=descriptionLabel]').should('exist')

      cy.get('[data-id=jobPrerequisitesList]').should('exist')

      cy.get('[data-id=cvElement]').should('exist')
    })
  })
})
