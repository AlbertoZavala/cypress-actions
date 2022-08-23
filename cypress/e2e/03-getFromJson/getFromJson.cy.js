// 1. Create the same search from amazon.text.cy.js
// 2. Add the product to the wish list.
// 3. This should run on a Cypress command.
// 4. The comman should be excecuted on beforeEach  
// 5. Add locators in json file
// 2. Excecute the command on beforeEach.


describe("Amazon Test", function(){

  // Added because Amazon site is throwing an error that
  // don't let me go further at the test.
  Cypress.on('uncaught:exception', (error, runnable) => {
    return false;
  });

  
  beforeEach(function(){
    cy.visit('https://www.amazon.com.mx');    

    cy.fixture('amazon.json')
      .then((locators) => {
        this.locators = locators;
      })
  });

  
  it('Adding a product to wish list', function(){
    
    cy.get(this.locators.logoLocator).should('be.visible');
    cy.get(this.locators.searchBox).type('Iphone');
    cy.get(this.locators.searchBoxButton).click();
    
    cy.get('span').contains(this.locators.textResultHeader).should('be.visible');    
    cy.get('span').filter(`:contains(${this.locators.selectedItem})[0]`).should('be.visible').click();
        
    cy.get(this.locators.addToCartButton).should('be.visible').click();

    cy.get('#attachSiNoCoverage').should('be.visible').click();
    cy.get('#attach-sidesheet-view-cart-button').should('be.visible').click();
  });
  
});

