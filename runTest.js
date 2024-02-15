// run-tests.js example
const cypress = require("cypress");

async function runTests() {
  await cypress.run({
    spec: "cypress/e2e/Backend/API/1-AdminFlow/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/2-Packages/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/3-Payment/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/4-UserFlow/",
  });
  await cypress.run({
    spec: "cypress/e2e/Backend/API/5-PublicAPI/",
  });
}

runTests();
