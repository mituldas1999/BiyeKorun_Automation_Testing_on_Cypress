// import 'cypress-mochawesome-reporter/register';
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  projectId: "8axud3",
  e2e: {
    baseUrl: "https://staging-api.biyekorun.us",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // config.specPattern = [
      //   "cypress/e2e/API/AdminFlow/1-Admin[Auth]/1.1-Admin_login/adminLogin.cy.js",
      //   "cypress/e2e/API/AdminFlow/1-Admin[Auth]/1.2-Edit_Profile/editProfile.cy.js",
      // ];
      // return config;
    },
  },
});
