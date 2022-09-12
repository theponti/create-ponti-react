describe('Basic flow', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');
  });

  it('Should render App correctly', () => {
    cy.visit('/');
    cy.findAllByTestId('app-container').should('have.length', 1);
  });
});
