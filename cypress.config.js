const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // no changes needed for now
    },

    video: true,   // enables video recording for `cypress run`
  },
});
