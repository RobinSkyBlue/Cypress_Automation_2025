const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 400000,
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    
  },
  video: true, // 🎥 enable video recording
  reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Cypress HTML Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      html: true,
      json: true,
      overwrite: true,

    },
});
