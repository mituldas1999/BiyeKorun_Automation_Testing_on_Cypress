// run-tests.js example
const cypress = require("cypress");

async function runTests() {
  /*************** Admin Start *****************************/
  //   await cypress.run({
  //     spec: "cypress/e2e/Backend/API/1-AdminFlow/",
  //   });
  /****************** Admin End ***********************************/
  /*************** Package Start *****************************/
  //   await cypress.run({
  //     spec: "cypress/e2e/Backend/API/2-Packages/",
  //   });
  /*************** Package End *****************************/

  /*************** Public API Start *****************************/
  await cypress.run({
    spec: "cypress/e2e/Backend/API/3-PublicAPI/",
  });
  /*************** Public API End *****************************/

  /***************** User Flow Start ************************************/
  //     await cypress.run({
  //       spec: "cypress/e2e/Backend/API/4-UserFlow/0.1-Register/",
  //     });
  //     await cypress.run({
  //       spec: "cypress/e2e/Backend/API/4-UserFlow/0.2-SendOTP/",
  //     });
  //   await cypress.run({
  //     spec: "cypress/e2e/Backend/API/4-UserFlow/1.35-ChatAPI/",
  //   });
  /*************** User Flow End *****************************/
}

runTests();
