const { chromium } = require("playwright");
const config = require("../config/config");
const { log } = require("../utils/logger");
const { saveToJSON } = require("../utils/fileHandler");

async function loginAndSaveSession() {
  const browser = await chromium.launch(config.settings);
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    log(`Navigating to login page: ${config.loginUrl}`);
    await page.goto(config.loginUrl, { waitUntil: "networkidle" });

    log("Filling login form");
    await page.fill(config.selectors.username, config.credentials.username);
    await page.fill(config.selectors.password, config.credentials.password);

    log("Submitting login form");
    await Promise.all([
      page.waitForNavigation({ waitUntil: "networkidle" }),
      page.click(config.selectors.loginButton),
    ]);

    await page.waitForSelector(config.selectors.userAvatar, { timeout: 5000 });
    log("Login successful!");

    const cookies = await context.cookies();
    saveToJSON(cookies, "cookies.json");

    return { browser, context, page };
  } catch (error) {
    log(`Login failed: ${error.message}`, "error");
    await browser.close();
    throw error;
  }
}

module.exports = { loginAndSaveSession };
