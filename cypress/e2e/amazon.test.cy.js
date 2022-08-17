describe("Amazon Test", function(){
  
  it("Visiting Amazon", function(){
    cy.visit('https://www.amazon.com.mx');    
    cy.get('#nav-logo-sprites', {timeout: 10000}).should('be.visible');
  });

  it('Adding a product', function(){
    cy.get('#twotabsearchtextbox').type('Iphone');
    cy.get('#nav-search-submit-button').click();
    
    cy.get('span').contains('RESULTADOS').should('be.visible');
    
    //const resultList = cy.get('.s-result-list');
    

  });

  
  
});