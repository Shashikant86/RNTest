const wdio = require("webdriverio");

const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    // platformVersion: "9.0",
    deviceName: "Android Emulator",
    app: "app-debug.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);

