// import 'cypress-mochawesome-reporter/register';
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  projectId: "8axud3",
  e2e: {
    baseUrl: "https://staging-api.biyekorun.us",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
