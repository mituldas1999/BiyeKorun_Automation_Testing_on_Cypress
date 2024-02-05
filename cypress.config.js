const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://staging-api.biyekorun.us",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
