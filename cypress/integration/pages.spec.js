/// <reference types="Cypress" />

context('Page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  //Home Page tests start
  it('should check home page and text headers', () => {
    cy.get('.home-page-container').should('exist')
    cy.get('h1').should('exist')
    cy.get('h2').should('exist')
  })

  it('should check home page redirection button', () => {
    cy.get('.btn').contains('Go to Blog Posts Page').click();
    cy.location('href').should('contain', '/posts');
  })
  //Home Page tests end

  //Post List tests start
  it('should check blog list page post list', () => {
    cy.visit('/posts')
    cy.get('.posts-container h1').should('exist');
    cy.get('.post-item').its('length').should('be.greaterThan', 10)
  })

  it('should check blog post list after unsuccessful search', () => {
    cy.visit('/posts')
    cy.get('.search-box').type('stupid search')
    cy.get('.no-result').should('exist')
    cy.get('.post-item').should('not.exist')
  })

  it('should check blog post list after successfull search', () => {
    cy.visit('/posts')
    cy.get('.search-box').type('qui')
    cy.get('.post-item').its('length').should('be.greaterThan', 1)
    cy.get('.no-result').should('not.exist')
  })
  //Post List tests end

  //Post Detail tests start
  it('should check blog post page, header and text', () => {
    cy.visit('/posts/3')
    cy.get('.post h1').should('exist')
    cy.get('h2').should('not.exist')
    cy.get('.post p').should('exist')
  })
  //Post Detail tests start

})

