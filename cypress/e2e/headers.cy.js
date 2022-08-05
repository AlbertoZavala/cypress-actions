describe("Probando headers", function(){
  it("debe de validar el header y el content type", function(){
    cy.request('employees').its('headers').its('content-type').should('include', 'application/json');
  });
});