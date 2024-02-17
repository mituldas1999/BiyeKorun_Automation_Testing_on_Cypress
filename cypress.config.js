// import 'cypress-mochawesome-reporter/register';
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "8axud3",
  e2e: {
    baseUrl: "https://staging-api.biyekorun.us",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
