/// <reference types="cypress" />

context('Actions', () => {
  // const getUrl = () => {
  //   if (process.env.ENV === 'docker') {
  //     return 'http://host.docker.internal:3000';
  //   } else {
  //     return 'http://localhost:3000';
  //   }
  // };
  beforeEach(() => {
    cy.visit('http://host.docker.internal:3000');
    cy.get('[data-test="email-input-field"]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');

    cy.get("[data-test='login-submit']").click();
  });

  // https://on.cypress.io/interacting-with-elements

  // it('It displays a feature', () => {
  //   console.log('Hello');
  //   expect(true).to.equal(true);
  // });

  it('Creates a new feature', () => {
    cy.get("[data-test='add-feature-btn'").click();

    cy.get("[data-test='CF_NAME_ID'").type('my-unique-test-name');
    cy.get("[data-test='CF_DESC_ID'").type('my-toggle');

    cy.get("[data-test='CF_CREATE_BTN_ID']").click();
  });
});
