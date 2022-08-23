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
    cy.get(this.locators.searchBox).type(this.locators.searchedIteme);
    cy.get(this.locators.searchBoxButton).click();
    
    cy.get('span').contains(this.locators.textResultHeader).should('be.visible');
    
    // cy.get('span').filter(`:contains(${this.locators.selectedItem})`).eq(0).should('be.visible').click({force: true});
    cy
      .get('[data-component-type="s-search-results"]')
      .get('[data-index="1"]').should('be.visible')
      .get('href').should('be.visible')

    //#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(4)
    

    // const selectedProduct = elements.filter(element => elements.includes(element))
    // cy.log(selectedProduct);
    

    //products[0].should('be.visible').click();
        
    // cy.get(this.locators.addToCartButton).should('be.visible').click();

    // cy.get('#attachSiNoCoverage').should('be.visible').click();
    // cy.get('#attach-sidesheet-view-cart-button').should('be.visible').click();
  });
  
});

