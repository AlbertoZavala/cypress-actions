// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('goToProduct', () => {
  
  cy.fixture('./../fixtures/amazon.json').then((locators) => {    
    cy.visit(locators.site);    
    cy.log(locators.logoLocator)    
    cy.get(locators.logoLocator).should('be.visible');
    cy.get(locators.searchBox).type(locators.searchedIteme);
    cy.get(locators.searchBoxButton).click();    
    cy.get('span').contains(locators.textResultHeader).should('be.visible');

    cy.get(locators.resultList).should('be.visible')
      .find(locators.firstElementContainer).should('be.visible')      
      .find(locators.firstElementImage).should('be.visible')
      .click()

    // cy.get(locators.wishListButton).should('be.visible').click()
  });
})


// Cypress.Commands.add('holi', () => {
//   cy.log('holi método dentro');
// })


// Cypress.Commands.addAll({
//   goToProduct() {
//     cy.log('HOLONA')
//   },
//   holi(){
//     return cy.log('HOLONA')
//   },
// })