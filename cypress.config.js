const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  projectId: "8axud3",
  e2e: {
    baseUrl: "https://staging-api.biyekorun.us",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwNDUyZmViZjUzYWNiZWYyNzYwNmUiLCJlbWFpbCI6ImFzaHJhZnVsaXNsYW1hc2hpazk2MEBnbWFpbC5jb20iLCJ1c2VySWQiOiJCS0xTOEFYSFNDIiwiZmlyc3ROYW1lIjoiQXNoaWsgdGVzdGluZyIsImxhc3ROYW1lIjoiRGFzIiwicm9sZSI6InVzZXIiLCJnZW5kZXIiOiJNYWxlIiwicGFja2FnZSI6IjY1YzA0NTJmZWJmNTNhY2JlZjI3NjA2YyIsImlhdCI6MTcwNzUyODQwNSwiZXhwIjoxNzA3NjE0ODA1fQ.dwj_wewVwukJuN0UsQPXnnARnwcQk9wDL7SAv8817lI",
    },
  },
});
