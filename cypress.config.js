const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://sso.foxstone.co/en/signin",
    specPattern: "cypress/tests/**/*.js",
    defaultCommandTimeout: 6000,
    reporter: "mochawesome",
    setupNodeEvents(on, config) {},
  },
});
