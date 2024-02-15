// run-tests.js example
const cypress = require("cypress");

async function runTests() {
  await cypress.run({
    spec: "cypress/e2e/Backend/API/1-AdminFlow/",
  });
  //   await cypress.run({
  //     spec: "cypress/e2e/Backend/API/1-AdminFlow/1.01-Admin[Auth]/1.1.2-Edit_Profile/editProfile.cy.js",
  //   });
  //   await cypress.run({ spec: './cypress/integration/2-secondTest.spec.js' });
  //   await cypress.run({ spec: './cypress/integration/3-thirdTest.spec.js' });
  // Add more spec files as needed
}

runTests();
