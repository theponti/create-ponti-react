// function get(id: string) {
//   return cy.findByTestId(id);
// }

function getAll(id: string) {
  return cy.findAllByTestId(id);
}

describe('Basic flow', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');
  });

  it('Should render App correctly', () => {
    cy.visit('/');
    getAll('app-container').should('have.length', 1);
  });
});
