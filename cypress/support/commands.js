// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add("loginAndGetAccessToken", (email, password) => {
  return cy
    .request({
      method: "POST",
      url: "/api/user/login",
      body: {
        email: email,
        password: password,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      const accessToken = response.body.token.accessToken;
      Cypress.env("accessToken", accessToken);
      return accessToken;
    });
});

//User Need to be change Email and Password
beforeEach(() => {
  cy.loginAndGetAccessToken("ashrafulislamashik960@gmail.com", "Ashik@2432");
});
