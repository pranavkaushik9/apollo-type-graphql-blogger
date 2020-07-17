beforeEach(() => {
    cy.visit('');
});

describe('homepage', () => {
    describe('when guest vistis', () => {
        it('should paint first 10 posts', () => {
            cy.get('[data-testid=postCard]').should('have.length', 10);
        });
    })
});
