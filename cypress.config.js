const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "18j93x",
  e2e: {
    baseUrl: "https://fakerestapi.azurewebsites.net/",
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    fixturesFolder: false,
    video: false,
  },
});
