const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://staging-api.biyekorun.us",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTkyNWYzNjE4ZDgzNDllNWI5OWZjOTkiLCJlbWFpbCI6Im1pdHVsZGFzNzUxQGdtYWlsLmNvbSIsInVzZXJJZCI6IkJLTFFVSzFSOFciLCJmaXJzdE5hbWUiOiJNaXR1bCIsImxhc3ROYW1lIjoiRGFzIiwicm9sZSI6InN0YWZmIiwiZ2VuZGVyIjoiTWFsZSIsInBhY2thZ2UiOiI2NTkyNWYzNjE4ZDgzNDllNWI5OWZjOTciLCJpYXQiOjE3MDcyODAxNjgsImV4cCI6MTcwNzM2NjU2OH0.0cBm_2OvyhSXIQtUK-15hIrihhW2va9S_1-8zfOYibw",
    },
  },
});
