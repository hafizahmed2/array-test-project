const userAgent = require('user-agents');
const { randomDelay, findElementByText } = require('./utils/scrapingUtils');

/**
 * Scrapes data from a webpage.
 * @param {Object} page - The puppeteer page object.
 * @param {number} iteration - The current iteration count.
 * @param {Object} config - Configuration object.
 */
async function scrapeData(page, iteration, config) {
  try {
    await setUserAgent(page);
    await navigateToPage(page, config.url);
    await randomDelay();

    // Using a custom utility function to find elements by text. This is useful for complex selectors
    // or when the element cannot be easily selected using standard CSS selectors.
    const trustScore = await findElementByText(page, config.selectors.trustScore)
    const lies = await findElementByText(page, config.selectors.lies)
    const bot = await findElementByText(page, config.selectors.bot)

    // Using Puppeteer's page.$eval for simple CSS selectors.
    // This method is more straightforward and efficient for simple selections.
    const fingerprintId = await page.$eval(config.selectors.fingerprintId, el => el.textContent.trim())

    return { trustScore, lies, bot, fingerprintId }
  } catch (error) {
    console.error(`Error during scraping iteration ${iteration}:`, error)
    return null
  }
}

async function setUserAgent(page) {
  await page.setUserAgent(new userAgent().toString())
}

async function navigateToPage(page, url) {
  await page.goto(url, { waitUntil: 'networkidle2' })
}

module.exports = {
  scrapeData,
}
