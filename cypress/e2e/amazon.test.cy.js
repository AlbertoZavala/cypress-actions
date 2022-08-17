describe("Amazon Test", function(){

  // Added because Amazon site is throwing an error that
  // don't let me go further at the test.
  Cypress.on('uncaught:exception', (error, runnable) => {
    return false;
  });
  
  it('Adding a product to cart', function(){
    cy.visit('https://www.amazon.com.mx');    
    cy.get('#nav-logo-sprites').should('be.visible');
    cy.get('#twotabsearchtextbox').type('Iphone');
    cy.get('#nav-search-submit-button').click();
    
    cy.get('span').contains('RESULTADOS').should('be.visible');    
    cy.get('span').contains('Apple 2022 iPhone SE (128 GB) - Medianoche').should('be.visible').click();
        
    cy.get('#add-to-cart-button').should('be.visible').click();

    cy.get('#attachSiNoCoverage').should('be.visible').click();
    cy.get('#attach-sidesheet-view-cart-button').should('be.visible').click();
  });
  
});