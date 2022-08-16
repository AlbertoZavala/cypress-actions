describe("Amazon Test", function(){
  
  it("Visiting Amazon", function(){
    cy.visit('https://www.amazon.com.mx');    
    cy.get('#nav-logo-sprites', {timeout: 10000}).should('be.visible');
  });

  it("Loggin", function(){
    const button = cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner', {timeout: 10000}).should('be.visible');    
    button.click();

  });
});