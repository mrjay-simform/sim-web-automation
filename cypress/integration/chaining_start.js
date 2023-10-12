/// <reference types="cypress" />

beforeEach(() => {

  cy
  .visit('/board/85491865165')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="task"]')
    .should('be.visible')

});